echo 'Nesta etapa o Jenkins irá publicar o código na branch "prod" do repositório no Github '

set -x
git add .
git commit -m "pushed from jenkins"
git checkout prod
git merge origin/development
