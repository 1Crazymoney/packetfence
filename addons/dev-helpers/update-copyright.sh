#!/bin/sh

perl -pi -e's/Copyright.*(20(0[0-9]|1[0-4])-)?20(0[0-9]|1[0-4]).*Inverse/Copyright (C) 2005-2015 Inverse/' $(grep -Prl 'Copyright.*(20(0[0-9]|1[0-4])-)?20(0[0-9]|1[0-4]).*Inverse' lib/ html/ addons/ sbin/ bin/ raddb/ ) 
