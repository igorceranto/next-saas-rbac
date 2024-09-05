import fastifyCors from '@fastify/cors'
import { fastify } from 'fastify'
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { createAccount } from './routes/auth/create-account'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import { authenticateWithPassword } from './routes/auth/authenticate-with-password'
import fastifyJwt from '@fastify/jwt'
import { getProfile } from './routes/auth/get-profile'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Next,js Saas',
        description: 'Full-stack SaaS app with multi-tenant & RBAC.',
        version: '1.0.0',
      },
      servers: [],
    },
    transform: jsonSchemaTransform,
  })

  app.register(fastifySwaggerUI, {
    routePrefix: '/docs',
  })

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyJwt, {
    secret: 'my-secret-key',
})

app.register(fastifyCors)

app.register(createAccount)
app.register(authenticateWithPassword)
app.register(getProfile)

app.listen({ port: 3333 }).then(() => {
    console.log('Server is running 🔥')
})