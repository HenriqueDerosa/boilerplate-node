export const PER_PAGE = 20

export const validationError = (err) => ({
  error: 'Validation failed',
  messages: err.inner,
})
