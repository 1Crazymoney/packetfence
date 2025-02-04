import { BaseViewCollectionItem } from '../../_components/new/'
import {
  BaseFormButtonBar,
  BaseFormGroupChosenMultiple,
  BaseFormGroupChosenOne,
  BaseFormGroupInput,
  BaseFormGroupInputNumber,
  BaseFormGroupInputPassword,
  BaseFormGroupTextareaUpload,
  BaseFormGroupToggleDisabledEnabled
} from '@/components/new/'
import {
  BaseFormGroupOses,
  BaseFormGroupToggleZeroOneIntegerAsOffOn,
  BaseFormGroupToggleZeroOneStringAsOffOn
} from '@/views/Configuration/_components/new/'
import TheForm from './TheForm'
import TheView from './TheView'

export {
  BaseViewCollectionItem                    as BaseView,
  BaseFormButtonBar                         as FormButtonBar,

  BaseFormGroupInput                        as FormGroupAccessToken,
  BaseFormGroupInput                        as FormGroupAgentDownloadUri,
  BaseFormGroupInput                        as FormGroupAltAgentDownloadUri,
  BaseFormGroupInput                        as FormGroupAndroidAgentDownloadUri,
  BaseFormGroupInput                        as FormGroupAndroidDownloadUri,
  BaseFormGroupInputPassword                as FormGroupApiPassword,
  BaseFormGroupInputPassword                as FormGroupApiToken,
  BaseFormGroupInput                        as FormGroupApiUri,
  BaseFormGroupInput                        as FormGroupApiUsername,
  BaseFormGroupInput                        as FormGroupApplicationIdentifier,
  BaseFormGroupInputPassword                as FormGroupApplicationSecret,
  BaseFormGroupToggleDisabledEnabled        as FormGroupApplyRole,
  BaseFormGroupToggleDisabledEnabled        as FormGroupAutoRegister,
  BaseFormGroupInput                        as FormGroupBoardingHost,
  BaseFormGroupInputNumber                  as FormGroupBoardingPort,
  BaseFormGroupToggleZeroOneIntegerAsOffOn  as FormGroupBroadcast,
  BaseFormGroupInput                        as FormGroupCaCertPath,
  BaseFormGroupToggleZeroOneStringAsOffOn   as FormGroupCanSignProfile,
  BaseFormGroupChosenMultiple               as FormGroupCategory,
  BaseFormGroupTextareaUpload               as FormGroupCertChain,
  BaseFormGroupTextareaUpload               as FormGroupCertificate,
  BaseFormGroupInput                        as FormGroupClientIdentifier,
  BaseFormGroupInputPassword                as FormGroupClientSecret,
  BaseFormGroupInputNumber                  as FormGroupCriticalIssuesThreshold,
  BaseFormGroupInput                        as FormGroupCustomerId,
  BaseFormGroupInput                        as FormGroupDescription,
  BaseFormGroupToggleDisabledEnabled        as FormGroupDeviceTypeDetection,
  BaseFormGroupInput                        as FormGroupDomains,
  BaseFormGroupToggleZeroOneStringAsOffOn   as FormGroupDpsk,
  BaseFormGroupToggleDisabledEnabled        as FormGroupDpskUseLocalPassword,
  BaseFormGroupChosenOne                    as FormGroupEapType,
  BaseFormGroupToggleDisabledEnabled        as FormGroupEnforce,
  BaseFormGroupInput                        as FormGroupEnrollUrl,
  BaseFormGroupInputNumber                  as FormGroupExpiresIn,
  BaseFormGroupInputNumber                  as FormGroupExpiresJitter,
  BaseFormGroupInput                        as FormGroupHost,
  BaseFormGroupInput                        as FormGroupIdentifier,
  BaseFormGroupInput                        as FormGroupIosAgentDownloadUri,
  BaseFormGroupInput                        as FormGroupIosDownloadUri,
  BaseFormGroupInput                        as FormGroupLinuxAgentDownloadUri,
  BaseFormGroupInput                        as FormGroupLoginUrl,
  BaseFormGroupInput                        as FormGroupMacOsxAgentDownloadUri,
  BaseFormGroupChosenOne                    as FormGroupNonComplianceSecurityEvent,
  BaseFormGroupOses                         as FormGroupOses,
  BaseFormGroupInputPassword                as FormGroupPasscode,
  BaseFormGroupInputPassword                as FormGroupPassword,
  BaseFormGroupChosenOne                    as FormGroupPkiProvider,
  BaseFormGroupInputNumber                  as FormGroupPort,
  BaseFormGroupTextareaUpload               as FormGroupPrivateKey,
  BaseFormGroupChosenOne                    as FormGroupProtocol,
  BaseFormGroupInputNumber                  as FormGroupPskSize,
  BaseFormGroupToggleDisabledEnabled        as FormGroupQueryComputers,
  BaseFormGroupToggleDisabledEnabled        as FormGroupQueryMobileDevices,
  BaseFormGroupInput                        as FormGroupRefreshToken,
  BaseFormGroupChosenOne                    as FormGroupRoleToApply,
  BaseFormGroupChosenOne                    as FormGroupSecurityType,
  BaseFormGroupInput                        as FormGroupServerCertificatePath,
  BaseFormGroupTextareaUpload               as FormGroupServiceAccount,
  BaseFormGroupInput                        as FormGroupSsid,
  BaseFormGroupToggleDisabledEnabled        as FormGroupSyncPid,
  BaseFormGroupInput                        as FormGroupTableForAgent,
  BaseFormGroupInput                        as FormGroupTableForMac,
  BaseFormGroupInput                        as FormGroupTenantCode,
  BaseFormGroupInput                        as FormGroupTenantIdentifier,
  BaseFormGroupInput                        as FormGroupUsername,
  BaseFormGroupInput                        as FormGroupUser,
  BaseFormGroupInput                        as FormGroupWindowsAgentDownloadUri,
  BaseFormGroupInput                        as FormGroupWindowsPhoneDownloadUri,

  TheForm,
  TheView
}
