# Todo Project

Este é um projeto de aplicação de lista de tarefas (Todo), 
com autenticação de usuário por senha, usando Django, Django REST Framework
e PostgreSQL.

## Requisitos
- Python 3.6+
- Django 3.2+
- Django REST Framework

## Configuração do Ambiente
1. **Clone o repositório:**

    ```bash
    git clone <https://github.com/Ana-Chaia/todo_project.git
    cd todo_project
    ```

2. **Crie e ative um ambiente virtual:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # No Windows use `venv\Scripts\activate`
    ```

3. **Instale as dependências:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Configure o banco de dados:**

    - Execute as migrações do banco de dados:

    ```bash
    python manage.py migrate
    ```

5. **Crie um superusuário (opcional):**

    ```bash
    python manage.py createsuperuser
    ```

6. **Inicie o servidor de desenvolvimento:**

    ```bash
    python manage.py runserver
    ```

7. **Acesse a aplicação:**

    - Acesse `http://127.0.0.1:8000/admin` no navegador.
    - Faça login com as credenciais do superusuário criado anteriormente.
    - Abra o navegador e vá para `[http://127.0.0.1:8000/login/]` para logar com um usuário já existente.
    - Acesse `http://127.0.0.1:8000/signup` no navegador e crie um novo usuário.
    - Abra o navegador e vá para `http://127.0.0.1:8000/todos` para ver a lista de tarefas.
    - Para acessar detalhes de uma tarefa específica, vá para `http://127.0.0.1:8000/todos/<id>`.

## Estrutura do Projeto

- `tasks/`: Contém a aplicação principal com modelos, views, serializers e URLs.
- `todo_project/`: Contém as configurações do projeto Django.

## Endpoints da API

- **GET /todos/**: Lista todas as tarefas.
- **POST /todos/**: Cria uma nova tarefa.
- **GET /todos/<id>**: Retorna os detalhes de uma tarefa específica.
- **PATCH /todos/<id>**: Atualiza parcialmente uma tarefa específica.
- **DELETE /todos/<id>**: Exclui uma tarefa específica.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT.
