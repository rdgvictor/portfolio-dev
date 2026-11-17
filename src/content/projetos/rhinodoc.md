---
nome: RhinoDoc
tipo: plugin para Rhino 8
status: em uso
origem: estúdio victor rodrigues · ferramenta
linguagens: "Python · HTML, CSS e JavaScript (interface)"
ficha:
  - { rotulo: problema, valor: Horas de trabalho manual a cada revisão de projeto }
  - { rotulo: regras, valor: Não executa sem camadas e dados do projeto configurados }
  - { rotulo: saídas, valor: PDF · DWG · 3DM · STEP }
  - { rotulo: código, valor: "Cerca de 10 mil linhas de Python no Rhino 8, com projeção 2D, planificação de chapas, cotas e checagem ortográfica" }
  - { rotulo: plataforma, valor: Rhinoceros 8 }
galeria:
  - { legenda: "Antes: pranchas desenhadas no espaço do modelo" }
  - { legenda: "Depois: layouts com carimbo e cotas" }
codigo:
  arquivo: "rhinodoc.py"
  linguagem: python
  nota: "Início da planificação de chapas pela linha neutra"
  trecho: |
    def planificar(geos, k=0.4):
        """Planificação pela linha neutra: contorno, linhas de dobra e tabela, ou None se não for chapa."""
        tol = sc.doc.ModelAbsoluteTolerance
        info = analisar_chapa(geos)
        if not info:
            return None
        t = info["t"]
        neutro = _offset_neutro(info["lado"], -k * t)
        alvo = neutro or info["lado"]
        k_usado = k if neutro else (0.0)
        dobras, linhas, dono = [], [], []
        for f in alvo.Faces:
            try:
                ok, cil = f.TryGetCylinder(tol * 20)
            except Exception:
                ok = False
            if not ok or f.IsPlanar(tol * 10):
                continue
            ang = _varredura(f, cil)
            if ang < 1:
                continue
            r = cil.Radius
            # convexa para fora: este lado é o de fora da dobra
            p = f.PointAt(f.Domain(0).Mid, f.Domain(1).Mid)
            radial = p - cil.Axis.ClosestPoint(p, False)
            convexa = _normal_face(f) * radial > 0
            if neutro:
                r_in = r - k * t
            else:
                r_in = r - t if convexa else r
            i = len(dobras)
            dobras.append({"angulo": round(ang, 1), "raio": round(max(r_in, 0.0), 2),
                           "sentido": "PARA BAIXO" if convexa else "PARA CIMA"})
            for ei in f.AdjacentEdges():
ordem: 2
---
Plugin para Rhino 8 que transforma as pranchas desenhadas no modelo em layouts prontos: carimbo com campos dinâmicos, cotas automáticas em camada própria, checagem de erros antes de exportar e saída em PDF, DWG, 3DM ou STEP.
