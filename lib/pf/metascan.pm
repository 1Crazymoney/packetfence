package pf::metascan;

=head1 NAME

pf::metascan

=cut

=head1 DESCRIPTION

Allow querying OPSWAT MetaScan online API

=cut

use strict;
use warnings;

use JSON;
use List::MoreUtils qw(any);
use Readonly;

use pf::CHI;
use pf::config;
use pf::log;

# List of MetaScan Online Scanner result IDs
# https://www.metascan-online.com/public-api#!/definitions
Readonly::Scalar our $METASCAN_RESULT_IDS => {
    0   => 'Clean',
    1   => 'Infected/Known',
    2   => 'Suspicious',
    3   => 'Failed To Scan',
    4   => 'Cleaned',
    5   => 'Unknown',
    6   => 'Quarantined',
    7   => 'Skipped Clean',
    8   => 'Skipped Dirty',
    9   => 'Exceeded Archive Depth',
    10  => 'Not Scanned',
    11  => 'Aborted',
    12  => 'Encrypted',
    13  => 'Exceeded Archive Size',
    14  => 'Exceeded Archive File Number',
};

use constant METASCAN_CACHE_EXPIRE => 86400;

=item hash_lookup

Looking up an MD5 hash against OPSWAT MetaScan Online scanner

=cut
sub hash_lookup {
    my ( $self, $data ) = @_;
    my $logger = pf::log::get_logger;

    my $md5_hash = $data->{'md5'};
    $logger->debug("Looking up MD5 hash '$md5_hash' against MetaScan online scanner");

    my $cache = pf::CHI->new(namespace => 'metascan');
    return $cache->compute(
        $md5_hash,
        {expires_in => METASCAN_CACHE_EXPIRE},
        sub {

            my $ua = LWP::UserAgent->new;
            $ua->timeout(2);
            $ua->default_header('apikey' => $Config{'metascan'}{'api_key'});
            my $response = $ua->get($Config{'metascan'}{'query_url_hash'} . $md5_hash);
            my $result;
            if ( $response->is_success ) {
                $result = decode_json($response->content);
            } else {
                $logger->warn("Looking up MD5 hash '$md5_hash' against MetaScan online scanner failed: " . $response->status_line);
                return;
            }

            # Check whether or not the scan result contains informations
            # MetaScan Online API scanner returns "Not Found" as a hash value where the key is the submitted MD5 hash if nothing has been found
            # Ref: https://www.metascan-online.com/public-api#!/retrieve_single
            if ( any { $_ eq "Not Found" } values %$result ) {
                $logger->debug("Looking up MD5 hash '$md5_hash' againt MetaScan online scanner returned a 'Not Found' status. Nothing to do");
                return;
            }

            return $self->parse_scan_result($md5_hash, $result);
        }
    );    
}

=item parse_scan_result

Parse JSON result from OPSWAT MetaScan Online Scanner

=cut
sub parse_scan_result {
    my ( $self, $md5_hash, $result ) = @_;
    my $logger = pf::log::get_logger;

    my $scan_all_result_i = $result->{'scan_results'}->{'scan_all_result_i'};

    $logger->debug("Looking up MD5 hash '$md5_hash' against MetaScan online scanner returned '$scan_all_result_i' - '" . $METASCAN_RESULT_IDS->{$scan_all_result_i} . "'");

    return $scan_all_result_i;
}

=head1 AUTHOR

Inverse inc. <info@inverse.ca>

=head1 COPYRIGHT

Copyright (C) 2005-2016 Inverse inc.

=head1 LICENSE

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301,
USA.

=cut

1;
