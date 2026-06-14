const nomeOriginal = "João Silva";
const cursoOriginal = "Curso: Técnico em Informática";
const fotoOriginal = "imagens/perfil1.jpg";


let totalAcoes = 0;


function registrarAcao(nomeDaAcao) {
    totalAcoes++;
    document.getElementById('contadorAcoes').textContent = totalAcoes;
    document.getElementById('ultimaAcao').textContent = nomeDaAcao;
}


document.getElementById('btnAlterarNome').addEventListener('click', () => {
    document.getElementById('nomePerfil').textContent = "Maria Oliveira";
    registrarAcao("Alteração de Nome");
});


document.getElementById('btnAlterarCurso').addEventListener('click', () => {
    document.getElementById('cursoPerfil').textContent = "Curso: Análise e Desenvolvimento de Sistemas";
    registrarAcao("Alteração de Curso");
});


document.getElementById('btnAlterarFoto').addEventListener('click', () => {
   
    document.getElementById('fotoPerfil').src = "imagens/perfil2.jpg";
    registrarAcao("Alteração de Foto");
});


document.getElementById('btnDestacarPerfil').addEventListener('click', () => {
    document.getElementById('perfil').classList.add('perfil-destacado');
    registrarAcao("Destaque de Perfil");
});

document.getElementById('btnRestaurar').addEventListener('click', () => {
    document.getElementById('nomePerfil').textContent = nomeOriginal;
    document.getElementById('cursoPerfil').textContent = cursoOriginal;
    document.getElementById('fotoPerfil').src = fotoOriginal;
    document.getElementById('perfil').classList.remove('perfil-destacado');
    registrarAcao("Restauração de Perfil");
});

document.getElementById('temaSelect').addEventListener('change', (event) => {
    const tema = event.target.value;
    document.body.className = ''; 
    
    if (tema === 'claro') document.body.classList.add('tema-claro');
    if (tema === 'escuro') document.body.classList.add('tema-escuro');
    if (tema === 'azul') document.body.classList.add('tema-azul');
    
    registrarAcao("Alteração de Tema (" + tema + ")");
});


document.getElementById('fonteRange').addEventListener('input', (event) => {
    const tamanho = event.target.value;
    document.getElementById('biografiaPerfil').style.fontSize = tamanho + 'px';
    document.getElementById('valorFonte').textContent = tamanho + 'px';
    registrarAcao("Ajuste de Fonte (" + tamanho + "px)");
});

document.getElementById('mostrarBio').addEventListener('change', (event) => {
    const bio = document.getElementById('biografiaPerfil');
    if (event.target.checked) {
        bio.classList.remove('oculto');
        registrarAcao("Exibição da Biografia");
    } else {
        bio.classList.add('oculto');
        registrarAcao("Ocultação da Biografia");
    }
});

document.getElementById('btnAtualizarContato').addEventListener('click', () => {
    const email = document.getElementById('emailInput').value;
    const telefone = document.getElementById('telefoneInput').value;
    

    document.getElementById('emailExibido').textContent = "E-mail: " + (email ? email : "não informado");
    document.getElementById('telefoneExibido').textContent = "Telefone: " + (telefone ? telefone : "não informado");
    
    registrarAcao("Atualização de Contato");
});
