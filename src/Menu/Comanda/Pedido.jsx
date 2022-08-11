import React from 'react'

function Pedido() {
  return (
    <div   className='pedido'>
        
        <h2>Pedidos</h2>



        <div class="wrapper2">
	<h3>Mesa 1</h3>
	
	<div class="lista-item">
		<input class="trigger-input" id="faq-titulo-1" type="checkbox"/>
		<div class="trigger-wrapper">
			<label for="faq-titulo-1">
			<h2 class="faq-titulo">+1 Ensalada    $250</h2>
			</label>
			<p class="faq-conteudo">
            Ingredientes:
            <br/>
           - Aguacate
           <br/>
            -Lechuga 
            </p>
		</div>

<p>Total = 250 MXN</p>
<button  className='custom-btn btn'>
    Enviar
</button>

	</div>
	
	
	
	
</div>



    </div>
  )
}

export default Pedido