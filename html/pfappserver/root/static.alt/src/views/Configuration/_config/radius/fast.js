import i18n from '@/utils/locale'
import pfFormChosen from '@/components/pfFormChosen'
import pfFormInput from '@/components/pfFormInput'
import { pfSearchConditionType as conditionType } from '@/globals/pfSearch'
import {
  attributesFromMeta,
  validatorsFromMeta
} from '../'
import {
  and,
  not,
  conditional,
  hasRadiusFasts,
  radiusFastExists
} from '@/globals/pfValidators'
import {
  required
} from 'vuelidate/lib/validators'

export const columns = [
  {
    key: 'id',
    label: 'Identifier', // i18n defer
    sortable: true,
    visible: true
  },
  {
    key: 'tls',
    label: 'TLS', // i18n defer
    sortable: true,
    visible: true
  },
  {
    key: 'buttons',
    label: '',
    locked: true
  }
]

export const fields = [
  {
    value: 'id',
    text: i18n.t('Identifier'),
    types: [conditionType.SUBSTRING]
  }
]

export const config = () => {
  return {
    columns,
    fields,
    rowClickRoute (item) {
      return { name: 'radiusFast', params: { id: item.id } }
    },
    searchPlaceholder: i18n.t('Search by identifier'),
    searchableOptions: {
      searchApiEndpoint: 'config/radiusd/fast_profiles',
      defaultSortKeys: ['id'],
      defaultSearchCondition: {
        op: 'and',
        values: [{
          op: 'or',
          values: [
            { field: 'id', op: 'contains', value: null }
          ]
        }]
      },
      defaultRoute: { name: 'radiusFasts' }
    },
    searchableQuickCondition: (quickCondition) => {
      return {
        op: 'and',
        values: [
          {
            op: 'or',
            values: [
              { field: 'id', op: 'contains', value: quickCondition }
            ]
          }
        ]
      }
    }
  }
}

export const view = (form = {}, meta = {}) => {
  const {
    isDeletable = false
  } = meta

  return [
    {
      tab: null,
      rows: [
        {
          label: i18n.t('Identifier'),
          cols: [
            {
              namespace: 'id',
              component: pfFormInput,
              attrs: {
                ...attributesFromMeta(meta, 'id'),
                disabled: isDeletable
              }
            }
          ]
        },
        {
          label: i18n.t('TLS Profile'),
          cols: [
            {
              namespace: 'tls',
              component: pfFormChosen,
              attrs: {
                ...attributesFromMeta(meta, 'tls'),
                disabled: isDeletable
              }
            }
          ]
        },
        {
          label: i18n.t('Authority Identity'),
          cols: [
            {
              namespace: 'authority_identity',
              component: pfFormInput,
              attrs: {
                ...attributesFromMeta(meta, 'authority_identity'),
                disabled: isDeletable
              }
            }
          ]
        },
        {
          label: i18n.t('Key'),
          cols: [
            {
              namespace: 'pac_opaque_key',
              component: pfFormInput,
              attrs: {
                ...attributesFromMeta(meta, 'pac_opaque_key'),
                disabled: isDeletable
              }
            }
          ]
        }
      ]
    }
  ]
}

export const validators = (form = {}, meta = {}) => {
  const {
    isNew = false,
    isClone = false
  } = meta
  return {
    id: {
      ...validatorsFromMeta(meta, 'id', i18n.t('Identifier')),
      ...{
        [i18n.t('Fast profile exists.')]: not(and(required, conditional(isNew || isClone), hasRadiusFasts, radiusFastExists))
      }
    }
  }
}
