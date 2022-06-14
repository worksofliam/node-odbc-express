FROM node:16.7.0

USER root

COPY . /nodeapp
WORKDIR /nodeapp

RUN curl https://public.dhe.ibm.com/software/ibmi/products/odbc/debs/dists/1.1.0/ibmi-acs-1.1.0.list | tee /etc/apt/sources.list.d/ibmi-acs-1.1.0.list

RUN apt update
RUN apt -y install ibm-iaccess

ENV PORT=$PORT
ENV DB_HOST=$DB_HOST
ENV DB_ID=$DB_ID
ENV DB_PASSWORD=$DB_PASSWORD

CMD npm run start