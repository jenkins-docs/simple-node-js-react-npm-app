echo 'Nesta etapa o Jenkins irá publicar o código na branch "prod" do repositório no Github '

set -x

git config user.email alexisdrops@gmail.com
git config user.name alexislopes

git branch

git merge origin/development

git push origin prod
