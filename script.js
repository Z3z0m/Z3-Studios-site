function enviar() {
    alert('Mensagem enviada com sucesso!')
}

function filtrar() {
    document.querySelectorAll('.card').forEach(c => c.style.display = 'block')
}

function abrirInstagram() {
    window.open('https://www.instagram.com/z3_studios_/', '_blank')
}

function abrirYouTube() {
    window.open('https://www.youtube.com/@Z3_Studios', '_blank')
}

function abrirTikTok() {
    window.open('https://www.tiktok.com/@z3_studios_', '_blank')
}

function enviarWhatsApp() {
    const hora = new Date().getHours()

    let saudacao = ''

    if (hora >= 5 && hora < 12) {
        saudacao = 'bom dia'
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'boa tarde'
    } else {
        saudacao = 'boa noite'
    }

    const mensagem = `Olá ${saudacao}.
eu tenho uma ideia de algo a fazer e gostaria de um orçamento`

    const telefone = '5521973029447'

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`

    window.open(url, '_blank')
}