// ======================= content ===========================

const socialLinks = {
    ig: 'https://www.instagram.com/z3_studios_/',
    yt: 'https://www.youtube.com/@Z3_Studios',
    tk: 'https://www.tiktok.com/@z3_studios_',
}

const productLinks = {
    candy: 'https://z3z0m.itch.io/candy-hunt',
    doces: 'https://ludensmn.itch.io/doces-santos-o-jogo',
    crossing: 'https://z3z0m.itch.io/crossinggenerations',
    semando: 'https://z3z0m.itch.io/semeando-saberes-tcp6',
    shadow: 'https://z3z0m.itch.io/shadow-sneak',
    cool: 'https://z3z0m.itch.io/cool-it',
}

// ======================= Functions ===========================

function msgSend() 
{
    alert('Mensagem enviada com sucesso!')
}

function filter() 
{
    document.querySelectorAll('.card').forEach(c => c.style.display = 'block')
}

function socialLinkOpen(id)
{
    window.open(socialLinks[id], '_blank')
}
function productLinkOpen(id)
{
    window.open(productLinks[id], '_blank')
}

function sendWhatsAppMsg() 
{
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