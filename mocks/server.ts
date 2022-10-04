import { rest } from "msw";
import { createServer } from "@mswjs/http-middleware";

type AddRequestHandler = (opts: {
  method:
    | "ALL"
    | "HEAD"
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "OPTIONS"
    | "PATCH";
  path: string;
  statusCode: number;
  body: Record<string, any>;
}) => any;

const addRequestHandler: AddRequestHandler = ({
  method,
  path,
  statusCode,
  body,
}) => {
  const _method = method.toLowerCase();

  const methodToHandler: Record<string, () => any> = {
    get: () =>
      rest.get(path, (_req, res, context) => {
        return res(context.status(statusCode), context.json(body));
      }),
  };

  return createServer(methodToHandler[_method]());
};

export { addRequestHandler };
