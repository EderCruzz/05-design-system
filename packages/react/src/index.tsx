import { styled } from './styles/index'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$green500',
    borderRadius: '$md',
    padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
