import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My app works  as expect', async () => {
  const user = userEvent.setup()
  const app = render(<App />)
  const textareaFrom = app.findByPlaceholderText('Introduccir texto')

  await user.type(textareaFrom, 'Hola mundo')
  const result = await app.findByDisplayValue(/Hola mundo/i, {}, { timeout: 500 })
  expect(result).toBeTruthy()
})