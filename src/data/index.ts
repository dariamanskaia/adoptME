import DataType from '../../types/DataType'

const data: () => Promise<[DataType]> = async () => {
  //   const request = await fetch(
  //     'http://localhost:3001/getPet/6272c070997301424ebbef68/'
  //   )
  //   const response = await request.json()
  //   console.log(response)
  //   return [response]
  const body = {
    auth: 'breakfast123',
  }

  const request = await fetch('http://localhost:3001/getAllPets', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response = await request.json()
  console.log(response)
  return response
}

export default data
