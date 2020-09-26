# Como executar a demo

- Baixe as dependências com `yarn`
- Faça o build para o emulador com o `yarn android` ou `yarn ios`
- Execute o metro bundler com `yarn start`

# Como integrar a um projeto já existente

- Copie a página **WelcomeScreen** para o projeto
- Crie uma pasta **@types** na pasta **src** com um arquivo de declaração de tipos *index.d.ts* com o seguinte conteúdo:
```typescript
declare module '*.mp4'
declare module '*.png'
```
- Adicione as dependências com `yarn add react-native-video styled-components`
- Rode o comando `npx pod-install`
- Edite conforme necessário os arquivos *index.tsx* e *styles.ts*

**Obs: lembre-se de editar a StatusBar para que fique transparente. Ex:**
```html
<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
```
