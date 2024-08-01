<template>
  <Layout>
    <section>
      <div class="row align-items-center justify-content-center justify-content-xl-between" id="row">
        <div class="col-sm-6" id="foto">
          <g-image class="mx-auto d-block img-fluid p-8" alt="Example image" src="~/assets/dayana.jpeg"/>
        </div>
        <div class="col-sm-6" style="padding: 10%; font-size: 16px;">
          <h2>Dayana Silva</h2>
          <p>
            Graduada em fisioterapia na universidade de Barra Mansa (UBM)
          e pós-graduada em fisioterapia intensiva em neonatologia e pediatria na universidade Celso Lisboa. 
          Possui cursos de extensão na área de fisioterapia respiratória em adultos. É também instrutora de pilates. </p>
          <p>Atualmente trabalha no programa melhor em casa do governo federal e é plantonista no pré-hospitalar e UPA na
          cidade de Seropédica-RJ.
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
