# Projeto Portfolio - React Native

Este é um projeto de portfólio desenvolvido com React Native e Expo, baseado no curso da Digital Innovation One para desenvolvedores mobile.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI (instale globalmente: `npm install -g @expo/cli`)

## 🚀 Instalação

1. Clone o repositório ou baixe os arquivos
2. Instale as dependências:
```bash
npm install
```

## 📖 Como usar

### Modo de desenvolvimento:
```bash
npm start
```
Isso iniciará o servidor de desenvolvimento do Expo. Use o app Expo Go no seu dispositivo móvel para escanear o QR Code e visualizar o app.

### Executar em plataformas específicas:
- **Android**: `npm run android`
- **iOS**: `npm run ios` (requer macOS)
- **Web**: `npm run web`

## 🎯 Funcionalidades

- ✅ Tela principal com informações do portfólio
- ✅ Tela de habilidades para exibir competências
- ✅ Navegação entre telas usando React Navigation
- ✅ Suporte para múltiplas plataformas (Android, iOS, Web)
- ✅ Interface responsiva e moderna

## 📁 Estrutura do projeto

```
portfolioleocursodiomeutudomobiledev/
├── package.json
├── App.tsx
├── index.ts
├── tsconfig.json
├── app.json
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── perfil.jpg
│   └── splash-icon.png
├── screens/
│   ├── MainScreen.tsx
│   └── SkillScreen.tsx
└── node_modules/
```

## 🛠️ Tecnologias utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e build de apps React Native
- **TypeScript** - Superset do JavaScript com tipagem estática
- **React Navigation** - Biblioteca para navegação entre telas
- **Expo Status Bar** - Componente para personalizar a barra de status

## 🎨 Exemplos de uso

1. Execute `npm start` no terminal
2. Escaneie o QR Code com o app Expo Go no seu smartphone
3. Navegue pelas telas do portfólio
4. Teste em diferentes plataformas usando os comandos específicos

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

## 📄 Licença

Este projeto está sob a licença MIT.
