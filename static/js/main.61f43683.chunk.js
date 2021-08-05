(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{45:function(n,t,e){},70:function(n,t,e){"use strict";e.r(t);var a,c=e(0),r=e.n(c),o=e(16),i=e.n(o),s=(e(45),e(46),e(18)),u=e(19),b=e(21),l=e(20),d=e(8),p=e(3),j=e(72),f=e(13),h=e(14),m=h.a.div(a||(a=Object(f.a)(["\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n  .form-label {\n    display: block;\n    margin-bottom: 10px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: 500;\n    font-size: 20px;\n    color: #6b7b96;\n  }\n  .form-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n  .addBtn {\n    margin-top: 20px;\n    padding: 5px;\n    background-color: transparent;\n    border: 2px solid gray;\n    border-radius: 5px;\n    font-weight: 700;\n    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 2px 0 #0b2349;\n    }\n  }\n"]))),O=e(17),x=function(n){return n.items},g=function(n){return n.filter},C=function(n){return n.loading},v=function(n){return n.error},y=Object(O.a)([function(n){return n.items},g],(function(n,t){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),k=e(15),w=e.n(k),N=e(4),A=Object(N.b)("contacts/addContactRequest"),z=Object(N.b)("contacts/addContactSuccess"),S=Object(N.b)("contacts/addContactError"),F=Object(N.b)("contacts/deleteContactRequest"),B=Object(N.b)("contacts/deleteContactSuccess"),I=Object(N.b)("contacts/deleteContactError"),L=Object(N.b)("contacts/getContactRequest"),E=Object(N.b)("contacts/getContactSuccess"),q=Object(N.b)("contacts/getContactError"),Z={changeFilter:Object(N.b)("phoneBook/changeFilter",(function(n){return{payload:n}}))};w.a.defaults.baseURL="http://localhost:4040";var D,M,J,R,P,$=e(1),G=function(n){Object(b.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=t.call.apply(t,[this].concat(c))).state={name:"",number:""},n.nameId=Object(j.a)(),n.phoneId=Object(j.a)(),n.handelInputChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(p.a)({},a,c))},n.handelFormSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;if(n.props.contacts.find((function(n){return n.name.toLowerCase()===a.toLowerCase()})))return alert('Contact "'.concat(a,'" already exists'));n.props.onSubmit(a,c),n.setState({name:"",number:""})},n}return Object(u.a)(e,[{key:"render",value:function(){return Object($.jsx)(m,{children:Object($.jsxs)("form",{className:"contacts-form",onSubmit:this.handelFormSubmit,children:[Object($.jsxs)("label",{className:"form-label",children:["Name",Object($.jsx)("input",{className:"form-input",type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:this.handelInputChange,autoComplete:"off"})]}),Object($.jsxs)("label",{className:"form-label",id:this.phoneId,children:["Number",Object($.jsx)("input",{className:"form-input",type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +",required:!0,id:this.phoneId,onChange:this.handelInputChange,autoComplete:"off"})]}),Object($.jsx)("button",{className:"addBtn",type:"submit",children:"Add contact"})]})})}}]),e}(c.Component),U=Object(d.b)((function(n){return{contacts:x(n)}}),(function(n){return{onSubmit:function(t,e){return n(function(n,t){return function(e){var a={name:n,number:t};e(A()),w.a.post("/contacts",a).then((function(n){var t=n.data;return e(z(t))})).catch((function(n){return e(S(n))}))}}(t,e))}}}))(G),H=h.a.ul(D||(D=Object(f.a)(["\n  margin-top: 30px;\n  .item {\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n  p {\n    display: inline-block;\n    margin-right: 20px;\n  }\n  .name {\n    color: #052f74;\n    font-weight: 600;\n    font-size: 20px;\n  }\n  .number {\n    color: #202733;\n    font-weight: 600;\n    font-size: 17px;\n  }\n  .delBtn {\n    display: block;\n    margin-left: auto;\n    padding: 5px;\n    background: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    border: 2px solid gray;\n    border-radius: 5px;\n    font-weight: 700;\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 3px 0 #fc0202;\n    }\n  }\n"]))),K=Object(d.b)((function(n){return{contacts:y(n)}}),(function(n){return{onDeleteContact:function(t){return n((e=t,function(n){n(F()),w.a.delete("/contacts/".concat(e)).then((function(){return n(B(e))})).catch((function(t){return n(I(t))}))}));var e}}}))((function(n){var t=n.contacts,e=n.onDeleteContact;return Object($.jsx)(H,{children:t.map((function(n){var t=n.id,a=n.name,c=n.number;return Object($.jsxs)("li",{className:"item",children:[Object($.jsxs)("p",{className:"name",children:[a,":"]}),Object($.jsx)("p",{className:"number",children:c}),Object($.jsx)("button",{className:"delBtn",type:"button",onClick:function(){return e(t)},children:"Delete"})]},t)}))})})),Q=h.a.div(M||(M=Object(f.a)(["\n  text-align: center;\n  .title {\n    color: #6b7b96;\n    margin-bottom: 10px;\n  }\n  .finde-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n"]))),T=Object(d.b)((function(n){return{value:g(n)}}),(function(n){return{onChange:function(t){return n(Z.changeFilter(t.target.value))}}}))((function(n){var t=n.filter,e=n.onChange;return Object($.jsxs)(Q,{children:[Object($.jsx)("h3",{className:"title",children:"Finde contacts by name"}),Object($.jsx)("form",{children:Object($.jsx)("label",{children:Object($.jsx)("input",{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0,onChange:e,className:"finde-input",autoComplete:"off"})})})]})})),V=function(n){Object(b.a)(e,n);var t=Object(l.a)(e);function e(){var n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=t.call.apply(t,[this].concat(c))).state={},n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object($.jsxs)("div",{className:"App",children:[Object($.jsx)("h1",{children:"Phonebook"}),Object($.jsx)(U,{}),Object($.jsx)("h2",{children:"Contacts"}),Object($.jsx)(T,{}),Object($.jsx)(K,{}),this.props.isLoadingContacts&&Object($.jsx)("h2",{children:"Loading..."}),this.props.isError&&Object($.jsx)("h2",{children:"Error, try again"})]})}}]),e}(c.Component),W={fetchContacts:function(){return function(n){n(L()),w.a.get("/contacts").then((function(t){var e=t.data;return n(E(e))})).catch((function(t){return n(q(t))}))}}},X=Object(d.b)((function(n){return{contacts:x(n),isLoadingContacts:C(n),isError:v(n)}}),W)(V),Y=e(39),_=e(40),nn=e(9),tn=Object(N.c)([],(J={},Object(p.a)(J,E,(function(n,t){return t.payload})),Object(p.a)(J,z,(function(n,t){return[t.payload].concat(Object(_.a)(n))})),Object(p.a)(J,B,(function(n,t){return n.filter((function(n){return n.id!==t.payload}))})),J)),en=Object(N.c)("",Object(p.a)({},Z.changeFilter,(function(n,t){return t.payload}))),an=Object(N.c)(!1,(R={},Object(p.a)(R,A,(function(){return!0})),Object(p.a)(R,z,(function(){return!1})),Object(p.a)(R,S,(function(){return!1})),Object(p.a)(R,F,(function(){return!0})),Object(p.a)(R,B,(function(){return!1})),Object(p.a)(R,I,(function(){return!1})),Object(p.a)(R,L,(function(){return!0})),Object(p.a)(R,E,(function(){return!1})),Object(p.a)(R,q,(function(){return!1})),R)),cn=function(n,t){return t.payload},rn=function(){return null},on=Object(N.c)(null,(P={},Object(p.a)(P,A,rn),Object(p.a)(P,S,cn),Object(p.a)(P,F,rn),Object(p.a)(P,I,cn),Object(p.a)(P,L,rn),Object(p.a)(P,q,cn),P)),sn=Object(nn.b)({items:tn,filter:en,loading:an,error:on}),un=Object(N.a)({reducer:sn});i.a.render(Object($.jsx)(r.a.StrictMode,{children:Object($.jsx)(d.a,{store:un,children:Object($.jsx)(Y.a,{children:Object($.jsx)(X,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.61f43683.chunk.js.map