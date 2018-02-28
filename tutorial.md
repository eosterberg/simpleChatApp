ng new simpleChatApp

cd simpleChatApp/

ng serve --open

ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.

ng g component settings

ng g component messages

ng generate service message --module=app