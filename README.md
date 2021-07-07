# Projeto Basic-web

## Qual o objetivo deste projeto ?

Este projeto tem como objetivo criar um sistema de RH para gerenciamento e controle dos funcionários, clientes e projetos. Neste sistema é possível realizar as seguintes operações:

* Visualizar todos os funcionários, quais projetos atuam, quais as suas habilidades tecnicas e suas informações gerais (endereço, salário, feedbacks, aumentos recebidos, etc...)

* Visualizar todos os clientes, quem são, quais projetos a empresa realiza para eles.

* Visualizar todos os projetos que a empresa produz, juntamente com quem atua neles, para quem é este projeto e quais as tecnologias utilizadas no projeto.

* Visualizar relatórios diversos que corelacionam os dados de clientes, projetos e funcionários da rarolabs. Exemplos: "Quais são os funcionários que atuam no projeto X". "Quais são todos os funcionários com férias agendadas para o ano Y". "Quais são os desenvolvedores NodeJS que atuam no projeto Z"

## Requisitos para rodar o projeto

Para rodar este projeto é necessário ter instalado o NodeJS versão 12 ou superior e o NPM ou YARN

## Instalação do projeto

1. Clone o repositorio basic-web do GIT para sua area de trabalho.
2. Abra o terminal e navegue ate a pasta onde o projeto baixado se encontra.
3. Rode o comando npm i.
4. Aguarde os pacotes de dependecia serem baixados.
5. Criar o arquivo ```.env``` na raiz do projeto com o seguinte .conteudo: ```REACT_APP_API_URL="http://localhost:{PORTA ONDE O SERVIÇO DAS APIs roda}/"```. Háverá mais informações sobe variáveis de ambiente mais adiante.
6. Rode o comando npm run start.

# Informações tecnicas

## Tecnologias Utilizadas no projeto

* Typescript.
* React JS como framework frontend.
* React router dom como gerenciador de roteamento de paginas.
* Material UI como framework gráfico.
* Yarn como gerenciador de pacotes.
* Axios para consulta a APIs

OBS 1: Possibilidade de utilizar TailwindCSS para melhorar a parte. gráfica, sendo possível utilizar com ou sem o material UI.
<br>link: https://tailwindcss.com/<br>
<br>
OBS 2: Possibilidade de utilizar o Framework Next JS para facilitar o desenvolvimento do frontend.
<br>link: https://nextjs.org/<br>
<br>

## Padronização de código

* Todo componente React deve ser Funcional.
* Todo componente React deve começar com letra maiuscula.
* Nomes de variáveis, componentes, objetos, etc, devem estar em inglês e estar em camelCase.

## Arquitetura de arquivos

O projeto segue a seguinte estrutura básica de arquivos:

```
  .
  ├── node_modules
  ├── public
  └── src
      ├── Apis
      ├── Components
      └── img
      ├── types
      └── Views
            └── Contributors
                ├── Components
                └── Contributors.module.css
                └── index.tsx
  ├── package.json
  ├── README.md
  └── tsconfig.json
```

* **node_modules**: Pasta onde ficam os pacotes baixados pelo **NPM** ou **Yarn**.
* **public**: Pasta gerada pelo **React** onde ficará os arquivos bases para a contrução do build.
* **src**: Pasta onde estará o codigo fonte do projeto
    * **Apis**: Pasta que possui todos os scripts de consulta a APIs externas
    * **Components**: Pasta que possui todos os componentes genéricos que não possuem dependencias com qualquer tela ou outro componente, sendo possível reutiliza-los em qualquer lugar do sistema.
    * **img**: Pasta que armazena todas as imagens utlizadas no projeto.
    * **types**: Pasta onde ficam todos os tipos de variáveis criadas pelo projeto.
    * **Views**: Pasta onde ficam cada página do projeto
        * **Components**: Pasta onde ficam os componentes específicos desta View.
        * **Cliets.module.css**: Arquivo que possui o estilo desta View
        * **index.tsx**: Arquivo de inicialização da View
    * **index.tsx**: Arquivo de inicialização do frontend
* **package.json**: Arquivo que define as dependencias do projeto e configurações usadas pelo projeto
* **README.md**: Arquivo de documentação do projeto
* **tsconfig.json**: Arquivo de configuração do Typescript

## Variáveis de ambiente

Deve-se criar um arquivo ```.env``` na raiz do projeto que será lido automaticamente pelo frontend. As variáveis de ambiente devem ser escritas tudo maiusculo e seguir o seguinte padrão: ```REACT_APP_{NOME VARIAVEL}```. **Caso não siga o padrão o sistema não irá ler as variáveis**

Variáveis de ambiente necessárias até o momento: 
* ```REACT_APP_API_URL```: URL das APIs de consulta internas, EX: http://localhost:3006/

## Estrutura de branchs

* O projeto possui as seguintes branchs: