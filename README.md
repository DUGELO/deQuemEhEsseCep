# De Quem é Esse CEP?

Aplicação Angular para pesquisa de endereço através de CEP. O usuário pode inserir o CEP em um formulário,
que valida a entrada e retorna o endereço correspondente utilizando uma API externa.
A aplicação foi desenvolvida com Angular, TypeScript e SCSS, utilizando formulários `template-driven` e validação de formulário.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Recursos

- **Busca de endereço via CEP**: Insira o CEP e a aplicação retorna o endereço completo.
- **Formulário `template-driven`**: Interface simples e intuitiva para o usuário.
- **Validação de formulário**: Garante que o usuário insira um CEP válido antes de submeter a busca.
- **Chamada de API Externa**: Realiza uma consulta à API para obter o endereço correspondente ao CEP.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/[seu-usuario]/de-quem-eh-esse-cep.git
   cd de-quem-eh-esse-cep
   ```
   
2. **Instale as dependências:**:
   ```bash
   npm install
   ```
   
3. **Execute a aplicação:**:
   ```bash
   ng serve --open
   ```
   
## Configuração

1. **API de Busca de CEP**: A aplicação utiliza uma API externa para buscar os endereços. Por padrão, a aplicação já está configurada para usar a API gratuita `https://viacep.com.br/ws/`.

2. **Arquivo de Configuração**: Verifique e ajuste o URL da API e outras configurações no arquivo `src/environments/environment.ts`, se necessário.

## Uso

1. **Acessar a Página**: Ao acessar a aplicação, você verá um campo de formulário para inserir o CEP.
2. **Inserir um CEP**: Insira um CEP válido de 8 dígitos no campo.
3. **Validar o CEP**: O formulário verifica automaticamente a validade do CEP inserido. Caso esteja incorreto, o usuário será notificado.
4. **Exibir Resultado**: Caso o CEP seja válido, o endereço correspondente será exibido na tela.

## Tecnologias Utilizadas

- **Angular**: Framework para construção de aplicações SPA (Single Page Application).
- **TypeScript**: Linguagem que permite uma tipagem estática opcional.
- **SCSS**: Pré-processador CSS utilizado para a estilização da aplicação.
- **API Externa**: [ViaCEP](https://viacep.com.br/) para busca de endereços através do CEP.

## Estrutura do Projeto

- `src/app`: Contém os componentes principais da aplicação.
  - `componentes`: Componente responsável pelo formulário de busca.
    - `formulario`: Componente responsável pelo formulário de busca.
    - `mensagem`: Componente responsavel para validar o formulario.
    - `resultado-pesquisa`: componente responsável por apresentar o endereço buscado no centro da tela em uma tabela.
    - `footer`: Rodapé da aplicação.
  - `services`: Serviço para comunicação com a API externa.
- `src/environments`: Arquivos de ambiente para URLs e outras configurações.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para novos recursos, correções de bugs ou melhorias.

## Licença

Este projeto é de licença livre. A aplicação utiliza uma API externa e gratuita para consulta de endereços através do CEP.
