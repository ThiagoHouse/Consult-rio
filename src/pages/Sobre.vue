<template>
  <Layout>
    <section>
      <div class="row align-items-center justify-content-center justify-content-xl-between" id="row">
        <div class="col-sm-6" id="foto">
          <g-image class="mx-auto d-block img-fluid p-8" alt="Example image" src="~/assets/dayana.jpeg" />
        </div>
        <div class="col-sm-6" style="padding: 10%; font-size: 16px;">
          <h2>Dayana Silva</h2>
          <p>
            Formada em Fisioterapia pela Universidade de Barra Mansa (UBM) e pós-graduada em Fisioterapia Intensiva em
            Neonatologia e Pediatria pela Universidade Celso Lisboa. Possui ainda cursos de extensão em Fisioterapia
            Respiratória para adultos e é instrutora certificada de Pilates.
          </p>
          <p>
            Atualmente, atua no Programa Melhor em Casa do Governo Federal e exerce a função de plantonista no
            atendimento pré-hospitalar e na UPA de Seropédica, RJ.
          </p>
          <strong>"A determinação não é apenas o desejo de alcançar um objetivo, mas a força de persistir apesar dos
            obstáculos."</strong>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Sobre'
  }
}
</script>

<style>
#foto {
  text-align: center;
}
</style>
