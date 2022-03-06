# Utilize the dockerized tests

1 - Build the container: `docker build -t stevecontainer .`

**_NOTE: If running the scripts headful (will do that most of the time) need to put `xvfb-run` in front of the npm command (ex. `xvfb-run npx playwright test --headed`) _**

2 - Run container: `docker run --ipc=host --name=runcontainer -td stevecontainer`

3 - Either run a bash command on the container `docker exec -t runcontainer bash -c "xvfb-run npx playwright test --headed"`
or
run bash on the containter (recommended when troubleshooting the containter): `docker run -it --rm --ipc=host runcontainer /bin/bash`

4 - To clean the everything when done, run the following command: `docker stop runcontainer && docker rm runcontainer && docker volume prune -f && docker image prune -a -f`
