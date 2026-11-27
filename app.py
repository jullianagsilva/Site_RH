from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/servicos')
def servicos():
    return render_template('servicos.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/contato', methods=['GET', 'POST'])
def contato():
    if request.method == 'POST':
        nome = request.form.get('nome', '')
        email = request.form.get('email', '')
        mensagem = request.form.get('mensagem', '')
        return f"""
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h2>Obrigado, {nome}! Sua mensagem foi enviada.</h2>
            <p><a href="/">Voltar para o início</a></p>
        </div>
        """
    return render_template('contato.html')

if __name__ == '__main__':
    app.run(debug=True)
