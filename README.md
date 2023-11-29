### Desafio docker -  Full Cycle
O projeto consiste em 2 desafios elaborados para a matéria de docker do curso Full Cycle.

#### Projeto GO
Criar uma imagem com menos de 2MB, para a exibição de um print do text **Full Cycle Rocks!!** na tela, após a execução da imagem.

[jeffepn/go:hellofullcycle](https://hub.docker.com/layers/jeffepn/go/hellofullcycle/images/sha256-664ad7e3d8d1bb3246522bc4028f7d314d58ba7c16fdd4cb249d6416e8cd3685?context=explore)

```bash
docker run jeffepn/go:hellofullcycle
```
#### Projeto Node
Criar um endpoint que a cada atualização insere um novo nome no banco de dados, e lista os resultados em tela.

##### Execução

```bash
git clone https://github.com/jeffepn/curso-full-cycle-desafio-docker.git
cd curso-full-cycle-desafio-docker/node 
docker-compose up -d
```