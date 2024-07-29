<template>
  <Layout>
    <h1>Sobre</h1>
    <h3>Dayana Silva</h3>
    <section>
      <div class="row align-items-center justify-content-center justify-content-xl-between" id="row">
        <div class="col-lg-6" id="foto">
          <h3><strong>Dayana Silva</strong></h3>
          <h6>Fisioterapeuta</h6>
          <g-image class="rounded-circle" alt="Example image" src="~/assets/dayana.jpeg" width="300"/>
        </div>
        <div class="col-lg-6" style="padding: 10%; font-size: 16px;">
          <p>
            Graduada em fisioterapia em 2014, pela universidade de Barra Mansa (UBM)
          e pós-graduada em fisioterapia intensiva em neonatologia e pediatria pela universidade Celso Lisboa.
          Tenho cursos de extensão na área respiratória em adulto. Instrutora de pilates.
          Atualmente trabalho no programa melhor em casa do governo federal e plantonista no pré-hospitalar e UPA na
          cidade de Seropédica.
          </p>
          <h3>"O esforço é único fator do qual temos pleno controle."</h3>
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
