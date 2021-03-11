import { useState } from 'react'

const useDataApi = (fetchUrl = '') => {
  const [url, setUrl] = useState(fetchUrl)

}
