import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Input from './index'

const props = {
	value: '',
	onChange: () => null
}

describe('Input Component', () => {
  it('should render Input correctly', () => {
    render(
      <Input name="EmailInput" type="email" placeholder="Email"/>
    )

		const input = screen.getByRole('textbox')

		expect(input).toBeInTheDocument()
		expect(input).toHaveValue('') 
		expect(input).toBeInTheDocument()
  })

  it('should Input onChange works correctly when changed the value', () => {
    render(
      <Input name="PasswordInput" type="password" placeholder="Password" role="textbox-password" value="123456" />
    )

		const input = screen.getByRole("textbox-password")
    expect(input).toBeInTheDocument()
		fireEvent.change(input, { target: { value: '' }})
		fireEvent.change(input, { target: { value: 'new value 2' }})

    const mockInput = jest.mock('./index.tsx', () => ({
      default: () => <Input name="PasswordInput" type="password" placeholder="Password" role="textbox-password" value="123456" />
    }))


		// expect(mockInput).toHaveBeenCalledTimes(1)
		// expect(input).toHaveBeenCalledWith('')
		// expect(input).toHaveBeenCalledWith('new value 2')
		// expect(input).toHaveValue('new value 2')
  })
})