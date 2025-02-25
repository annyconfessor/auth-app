import React, { useState } from "react"
import Button from "../../components/Button"
import TextInput from "../../components/Input"
import { BoxComponent as Box } from "../../components/Box"
import ContainerLayout from "../../components/Layout"
import TextComponent from "../../components/Text"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" })

  return (
    <ContainerLayout>
      <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#F0F0F7" width="50%" height="100%">
        <Box display="flex" justifyContent="space-evenly" width="80%" flexDirection="column" style={{ gap: "2rem" }}>
          <TextComponent variant="title">Fazer login</TextComponent>

          <Box display="flex" flexDirection="column" width="50%" margin="auto" style={{ gap: "2rem" }}>
            <TextInput 
              name="EmailInput" 
              type="email" 
              value={formData.email} 
              placeholder="Email" 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            <TextInput 
              name="PasswordInput" 
              type="password" 
              value={formData.password} 
              placeholder="Password" 
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
            />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="space-evenly" width="100%">
            <Box display="flex" alignItems="center">
              <input type="checkbox" id="remember-password" />
              <label htmlFor="remember-password">
                <TextComponent variant="paragraph">Lembrar-me</TextComponent>
              </label>
            </Box>
            <TextComponent variant="paragraph">Esqueci minha senha</TextComponent>
          </Box>

          <Button onClick={() => {}}>Login</Button>

          {/* Footer */}
          <Box display="flex" justifyContent="space-between">
            <TextComponent variant="body">Não tem conta? Cadastre-se</TextComponent>
            <TextComponent variant="paragraph">É de graça 💛</TextComponent>
          </Box>
        </Box>
      </Box>
    </ContainerLayout>
  )
}

export default Login
