import Mrscore, { styles } from '../framework/core/index.mjs'
import { Form, FormContent, Forms, Loading } from '../framework/ui/index.mjs'
import { Bootstrap } from '../framework/web/index.mjs'

Loading.show()

await new Bootstrap().run()

let newValue = null
// let oldValue = null
//#region todo: form
const form = Form({
  name: 'user',
  header: 'User register',

  onSubmit(value) {
    value.endereco.cep = newValue
    console.log(value)
    console.log(value.endereco.cep)
    if (value.name != undefined) {
      document.body.appendChild(
        Mrscore.createElement(
          'p',
          {
            style:
              'color:' +
              styles.theme.colors.normal +
              ';background-color:' +
              styles.theme.backgrounds.shade,
          },
          Mrscore.createElement('p', null, 'Nome:'),
          Mrscore.createElement('span', null, value.name),
          Mrscore.createElement('p', null, 'E-mail:'),
          Mrscore.createElement('span', null, value.email)
        )
      )
    }
  },
  // onChange(value) {
  //   if (value.endereco.cep !== oldValue) {
  //     // todo...
  //     oldValue = value.endereco.cep
  //   }
  // },

  children: [
    FormContent({
      col: 3,
      children: [
        Forms.Input({ name: 'id', label: 'ID', readonly: '' }),
        Forms.Input({ name: 'name', label: 'Name' }),
        Forms.Input({ name: 'email', label: 'Email', type: 'email' }),

        Forms.InputDropDownData({
          name: 'genero',
          label: 'Gênero',
          // options of component
          data: [
            { value: 'f', description: 'feminino' },
            { value: 'm', description: 'masculino' },
            { value: 'n', description: 'Prefiro nao responder' },
          ],
          //   // optional
          //   isMultiple: false,
          //   // optional
          //   isSearchable: false,
        }),
      ],
    }),
    FormContent({
      col: 3,
      legends: 'Endereço',
      id: 'endereco',
      children: [
        Forms.Input({
          onChange(value) {
            // "3".padStart(8, "0") // "00000003"
            // "3".padEnd(8, "0") // "30000000"
            console.log('cep mudado')
            value = value.toString().padStart(8, '0')
            const validCep = value.substr(0, 5) + '-' + value.substr(5, 4)

            const apiURL = `https://viacep.com.br/ws/${value}/json/`

            // dando o feedback visual de que algo esta sendo processado
            const currentFormValue = form.value
            currentFormValue.endereco.estado = '...'
            currentFormValue.endereco.bairro = '...'
            currentFormValue.endereco.cidade = '...'
            currentFormValue.endereco.rua = '...'
            currentFormValue.endereco.numero = '...'
            form.value = currentFormValue

            fetch(apiURL)
              .then((response) => response.json())
              .then((cep) => {
                console.log(cep)

                // atualiza os campos retornados
                currentFormValue.endereco.estado = cep.uf
                currentFormValue.endereco.bairro = cep.bairro
                currentFormValue.endereco.cidade = cep.localidade
                currentFormValue.endereco.rua = cep.logradouro
                currentFormValue.endereco.numero = cep.complemento

                // setando o novo valor no formulario com base na variavel alterada
                form.value = currentFormValue
              })
              .catch((erro) => {
                console.log(
                  `Erro, o Cep ${validCep} não corresponde a um Cep existente`
                )
                // deu erro, estamos limpando os campos
                currentFormValue.endereco.estado = null
                currentFormValue.endereco.bairro = null
                currentFormValue.endereco.cidade = null
                currentFormValue.endereco.rua = null
                currentFormValue.endereco.numero = null
                form.value = currentFormValue
              })

            console.log(validCep)
          },
          name: 'cep',
          label: 'CEP',
          type: 'number',
          maxlength: '8',
          oninput: `
            
          if (this.value.length > this.maxLength) {
            this.value = this.value.slice(0, this.maxLength)
          };
          `,
        }),
        Forms.Input({ name: 'endereco.estado', label: 'Estado' }),
        Forms.Input({ name: 'endereco.cidade', label: 'cidade' }),
        Forms.Input({ name: 'endereco.bairro', label: 'bairro' }),
        Forms.Input({ name: 'endereco.rua', label: 'rua' }),
        Forms.Input({ name: 'endereco.numero', label: 'numero' }),
      ],
    }),
  ],
})

//#endregion

document.body.append(Mrscore.createElement('main', null, form))
Loading.hide()
