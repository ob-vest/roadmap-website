/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as RequestsIndexImport } from './routes/requests/index'
import { Route as RequestsRequestIdImport } from './routes/requests/$requestId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const RequestsIndexRoute = RequestsIndexImport.update({
  path: '/requests/',
  getParentRoute: () => rootRoute,
} as any)

const RequestsRequestIdRoute = RequestsRequestIdImport.update({
  path: '/requests/$requestId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/requests/$requestId': {
      preLoaderRoute: typeof RequestsRequestIdImport
      parentRoute: typeof rootRoute
    }
    '/requests/': {
      preLoaderRoute: typeof RequestsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  LoginRoute,
  RequestsRequestIdRoute,
  RequestsIndexRoute,
])

/* prettier-ignore-end */
