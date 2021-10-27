/* eslint-disable @typescript-eslint/no-explicit-any */
import { root } from 'root'

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface Request {
  path: string
  method: Method
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

const api = root.domain('api')

export const requestFx = api.effect<Request, Response>({
  handler: async ({ path, baseUrl, method, params, ...config }) => {
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
  },
})
