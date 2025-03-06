import React, { useState } from "react"
import Button from "../../components/Button"
import TextInput from "../../components/Input"
import { BoxComponent as Box } from "../../components/Box"
import ContainerLayout from "../../components/Layout"
import TextComponent from "../../components/Text"
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" })

  return (
    <ContainerLayout>
      <Box display="flex" justifyContent="center" alignItems="center" backgroundColor="#F0F0F7" width="50%" height="100%">
        <Box width="50%" display="flex" flexDirection="column" style={{ gap: "2rem" }}>
          <TextComponent variant="title">Fazer login</TextComponent>

          <Box display="flex" flexDirection="column">
            <TextInput 
              isRadiusTop
              name="EmailInput" 
              type="email" 
              value={formData.email} 
              placeholder="Email" 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            <TextInput  
              isRadiusBottom
              name="PasswordInput" 
              type="password" 
              value={formData.password} 
              placeholder="Password" 
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
            />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="space-evenly">
            <Box display="flex" alignItems="center">
              <input type="checkbox" id="remember-password" />
              <label htmlFor="remember-password">
                <TextComponent variant="paragraph">Lembrar-me</TextComponent>
              </label>
            </Box>
            <TextComponent variant="paragraph">Esqueci minha senha</TextComponent>
          </Box>

          <Button variant="solid" onClick={() => {}}>Login</Button>

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                console.log(jwtDecode(credentialResponse.credential))
              } else {
                console.error('Credential is undefined')
              }
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />

          {/* Footer */}
          <Box display="flex" justifyContent="space-between">
            <TextComponent variant="body">Não faz parte da comunidade?</TextComponent>
            <TextComponent variant="paragraph">É de graça 💛</TextComponent>
          </Box>
        </Box>
      </Box>
    </ContainerLayout>
  )
}

export default Login
