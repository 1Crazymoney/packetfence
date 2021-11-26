import apiCall from '@/utils/api'

export default {
  list: params => {
    return apiCall.getQuiet('pki/cas', { params }).then(response => {
      const { data: { items = [] } = {} } = response
      return { items }
    })
  },
  search: params => {
    return apiCall.postQuiet('pki/cas/search', params).then(response => {
      return response.data
    })
  },
  create: data => {
    const { id, ...rest } = data // strip `id` from isClone
    return apiCall.post('pki/cas', rest).then(response => {
      const { data: { error } = {} } = response
      if (error) {
        throw error
      } else {
        const { data: { items: { 0: item = {} } = {} } = {} } = response
        return item
      }
    })
  },
  item: id => {
    return apiCall.get(['pki', 'ca', id]).then(response => {
      const { data: { items: { 0: item = {} } = {} } = {} } = response
      return item
    })
  },
  resign: data => {
    const { id } = data
    return apiCall.post(['pki', 'ca', 'resign', id], data).then(response => {
      const { data: { error } = {} } = response
      if (error) {
        throw error
      } else {
        const { data: { items: { 0: item = {} } = {} } = {} } = response
        return item
      }
    })
  }
}
