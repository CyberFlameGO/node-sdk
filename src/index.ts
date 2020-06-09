import * as grpc from '@grpc/grpc-js';
import { ContainersClient } from './protos/containers/v1/containers_grpc_pb';
import { ContextsClient } from './protos/contexts/v1/contexts_grpc_pb';
import { ComposeClient } from './protos/compose/v1/compose_grpc_pb';
import { StreamingClient } from './protos/streams/v1/streams_grpc_pb';

// ~/Library/Containers/com.docker.docker/Data/cli-api.sock
const address = 'unix:///tmp/backend.sock';

export class Containers extends ContainersClient {
  constructor() {
    super(address, grpc.credentials.createInsecure());
  }
}

export class Contexts extends ContextsClient {
  constructor() {
    super(address, grpc.credentials.createInsecure());
  }
}

export class Compose extends ComposeClient {
  constructor() {
    super(address, grpc.credentials.createInsecure());
  }
}

export class Streams extends StreamingClient {
  constructor() {
    super(address, grpc.credentials.createInsecure());
  }
}