import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();

//{REPL} is a simple interactive environment that takes single user inputs, executes them,
// and returns the result to the user. The REPL feature lets you inspect your dependency
// graph and call methods on your providers (and controllers) directly from your terminal.
