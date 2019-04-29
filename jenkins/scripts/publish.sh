echo 'Nesta etapa o Jenkins irá publicar o código na branch "prod" do repositório no Github '

set -x
echo $"push from Jenkins" >> "./pushes.log"
git add .
git commit -m "pushed from jenkins"
git merge origin/prod
