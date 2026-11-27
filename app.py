from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/contato', methods=['GET', 'POST'])
def contato():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        mensagem = request.form['mensagem']
        # Aqui você pode salvar ou enviar por e-mail
        return f"<h2>Obrigado, {nome}! Sua mensagem foi enviada.</h2>"
    return render_template('contato.html')

if __name__ == '__main__':
    app.run(debug=True)
