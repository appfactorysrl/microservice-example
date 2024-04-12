# Esempio di microservizi
Il repository è formato da due cartelle:
- time
- middleware

## Time
Time è un microservizio che espone un unico metodo.
La sua interfaccia è definita dal file protobuffer, contenuto nella cartella `proto`.
Attraverso lo script `generate-server.sh`, viene generato il codice di basso livello per il server gRPC.
Nel file `index.ts` viene definta la classe di implementazione del server stesso, e l'avvio del server gRPC.
Il codice del microservizio viene quindi diviso in moduli, che possono contenere una o più funzioni.
Se necessario, esisterà una cartella `models`, che conterrà i modelli e i file dell'ORM scelto per il mapping verso il database.

## Middleware
Il Middleware è il microservizio a cappello, che definisce le API Rest verso i vari client.

L'applicazione principale Express viene devisa per diversi moduli.
Ogni modulo definsce il proprio "router" di express, che ha il compito di gestire i vari endpoint del modulo.
All'interno di ogni modulo, può essere presente una cartella `dto`, contenente le definizioni (come classi o interfacce) dei dati che saranno scambiati in input e in output dalle API.

Lo script `generate-client.sh` genera i file per di basso livello per i client gRPC, in modo da poter comunicare in modo agevole verso i vari microservizi.

Nell'esempio, il modulo `time` definirà quindi un router, con un unico endpoint, che utilizzerà il microservizio appropriato per ottenere l'informazione richiesta, prima di ritornarla al client originale.


