/* eslint-disable @typescript-eslint/no-explicit-any */
export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface Request {
  path: string
  method?: Method
  headers?: HeadersInit
  body?: BodyInit
  params?: Record<string, string>
  baseUrl?: string
}

export interface Response<T = any> {
  body: T
  headers: Headers
  status: number
  ok: boolean
}

export const request = async <T>({
  method = Method.GET,
  baseUrl = `${process.env.AVIASALES_API_URL}`,
  ...config
}: Request): Promise<Response<T>> => {
  const { path, params } = config
  const body = config.body ? JSON.stringify(config.body) : undefined
  const query =
    params && Object.keys(params).length
      ? `?${new URLSearchParams(params).toString()}`
      : ''

  const response = await fetch(`${baseUrl}${path}${query}`, {
    method: method,
    body: body ?? null,
  })

  const answer = {
    body: await response.json(),
    status: response.status,
    ok: response.ok,
    headers: response.headers,
  }

  if (response.ok) return answer
  throw answer
}
