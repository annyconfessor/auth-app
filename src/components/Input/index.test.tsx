export {}
// import { fireEvent, render, screen } from '@testing-library/react'

// import Input from './index'
// import ThemeProvider from '../../theme'

// const props = {
// 	label: 'Label',
// 	value: '',
// 	onChange: () => null
// }

// describe('Input Component', () => {
//   it('should render Input correctly', () => {
//     render(
//       <ThemeProvider>
//         <Input {...props} />
//       </ThemeProvider>
//     )

// 		const label = screen.getByText('Label')
// 		const input = screen.getByRole('textbox')

// 		expect(input).toBeInTheDocument()
// 		expect(input).toHaveValue('')
// 		expect(label).toBeInTheDocument()
//   })

//   it('should Input onChange works correctly when changed the value', () => {
//     render(
//       <ThemeProvider>
//         <Input {...props} />
//       </ThemeProvider>
//     )

// 		const input = screen.getByRole('textbox')
// 		fireEvent.change(input, { target: { value: 'new value' }})
// 		fireEvent.change(input, { target: { value: 'new value 2' }})

// 		expect(input).toHaveBeenCalledTimes(2)
// 		expect(input).toHaveBeenCalledWith('new value')
// 		expect(input).toHaveBeenCalledWith('new value 2')
// 		expect(input).toHaveValue('new value 2')
//   })
// })