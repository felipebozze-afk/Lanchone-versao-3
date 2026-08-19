import { createServer } from "node:http";

const porta = Number(process.env.PORT ?? 3001);
const usuarios = {
  cliente: { senha: "123", rota: "/home" },
  admin: { senha: "123", rota: "/pedido" },
};

function responder(resposta, status, dados) {
  resposta.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  });
  resposta.end(JSON.stringify(dados));
}

const servidor = createServer((requisicao, resposta) => {
  if (requisicao.method === "OPTIONS") {
    responder(resposta, 204, {});
    return;
  }

  if (requisicao.method !== "POST" || requisicao.url !== "/api/login") {
    responder(resposta, 404, { mensagem: "Rota não encontrada." });
    return;
  }

  let corpo = "";
  requisicao.on("data", (parte) => {
    corpo += parte;
  });

  requisicao.on("end", () => {
    try {
      const { usuario, senha } = JSON.parse(corpo);
      const conta = usuarios[usuario];

      if (!conta || conta.senha !== senha) {
        responder(resposta, 401, { mensagem: "Usuário ou senha incorretos." });
        return;
      }

      responder(resposta, 200, { usuario, rota: conta.rota });
    } catch {
      responder(resposta, 400, { mensagem: "Dados de login inválidos." });
    }
  });
});

servidor.listen(porta, () => {
  console.log(`Backend disponível em http://localhost:${porta}`);
});
