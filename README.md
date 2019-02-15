Para poder usar la máquina virtual del iaas, lo primero es arrancarla en iaas.ull.es e iniciar sesión con el nombre usuario y la contraseña usuario, tras lo cual pedirá un cambio de contraseña.
Una vez cambiada la contraseña usaremos el comando ifconfig para ver la dirección IP de la máquina y usaremos esta para conectarnos a esta usándo ssh usuario@11.1.111.111.
O podemos configurar una clave ssh para acceder de forma más automática, generando una clave ssh con el comando ssh-keygen -trsa y añadiedo al fchero ~/.ssh/config una entrada con el nombre que le queremos asignar al host, su dirección IP el nombre del usuario de la máquina virtual y la ubicación de la clave, la cual autorizaremos en la máquina del iaas copiando los contenidos de clave.pub a ~/.ssh/autorized_keys.
De esta forma se puede realizazr ssh nombre_host y acceder directamente a la máquina. Sin tener que volver a iniciar la máquina si esta no se apaga.



Versiones intaladas de algunas herramientas de la máquina virtual:

usuario@ubuntu:~$ brew --version
Homebrew 2.0.1

usuario@ubuntu:~$ git --version
git version 2.17.1

usuario@ubuntu:~$ nvm --version
0.34.0

usuario@ubuntu:~$ node --version
v11.9.0

usuario@ubuntu:~$ nodejs --version
v8.10.0

usuario@ubuntu:~$ jshint --version
jshint v2.10.1

usuario@ubuntu:~$ rvm --version
rvm 1.29.7 (manual) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]

usuario@ubuntu:~$ vim --version
VIM - Vi IMproved 8.0 (2016 Sep 12, compiled Apr 10 2018 21:31:58)

usuario@ubuntu:~$ brew info ack
ack: stable 2.24, HEAD

usuario@ubuntu:~$ brew info ag
the_silver_searcher: stable 2.2.0 (bottled), HEAD

usuario@ubuntu:~$ brew info hub
hub: stable 2.8.4 (bottled), HEAD
