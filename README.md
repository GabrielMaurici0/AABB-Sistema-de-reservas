# Para executar o arquivo


Para executar este arquivo em seu computador você utilizará este link

    https://github.com/GabrielMaurici0/AABB-Sistema-de-reservas.git
    
E terá que ter o GIT instalado para poder fazer a clonagem do arquivo e deverá ter a tabela no banco de dados para fazer o salvamento dos dados.

No banco de dados você terá que criar um usuario a parte para fazer a conexão e criar um banco de dados;
Para criar um banco você terá que usar o comando:
        
     create database nome_do_banco;

     
E para a criação do usuário seguiria as seguintes informações

Para o MySQL 8.0:

      create user 'nomeDoUsuario'@'%' identified with mysql_native_password by 'senha';
      
Para o MySQL 5.5:

      create user 'nomeDoUsuario'@'%' identified by 'senha';
      
Garanta o acesso para desse novo usuário para o banco de dados criado anteriormente:

      grant all on bancoDeDados.* to 'nomeDoUsuario'@'%';

No Visual Studio Code com o repositório clonado você terá que mudar para a ramificação de validarCPF 
Com o arquivo clonado, você precisa instalar as dependências do node. Usando:

    npm install

A seguir você terá que criar um arquivo chamado .env, neste arquivo você colocará:

    DB_NAME=nome_do_banco_de_dados
    DB_USER=usuario_do_banco_de_dados
    DB_PASSWORD=senha_do-usuario_do_banco_de_dados
    DB_HOST=LOCALHOST

Feito isso, você pode digitar o seguinte comando para iniciar o servidor:

    npm start


Sistema de Login, envio do email e impedimento de reservas em horários seguidos não está funcionando, por motivos particulares não tive disponibilidade para fazer, porém o cadastro é efetuado e é salvo no banco de dados.
Demais serviços estão funcionando.
