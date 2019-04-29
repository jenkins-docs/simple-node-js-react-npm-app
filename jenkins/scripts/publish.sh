echo 'Nesta etapa o Jenkins  irá publicar o código na branch "prod" do repositório no Github '

set -x

git checkout confirmado

git branch

git merge origin/development
