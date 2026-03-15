// ═══ SWEETALERT2 PRESET ═══
const SWL = Swal.mixin({customClass:{confirmButton:'swal2-confirm',cancelButton:'swal2-cancel',denyButton:'swal2-deny'},buttonsStyling:false});
const toast = (msg,icon='success') => Swal.fire({toast:true,position:'bottom-end',icon,title:msg,showConfirmButton:false,timer:3000,timerProgressBar:true,background:'var(--surface)',color:'var(--text)',iconColor:icon==='success'?'var(--success)':icon==='error'?'var(--danger)':'var(--warning)'});
const confirmDlg = async(title,text,icon='warning') => {const r=await SWL.fire({title,html:text,icon,showCancelButton:true,confirmButtonText:'Confirmar',cancelButtonText:'Cancelar',reverseButtons:true});return r.isConfirmed;};

NProgress.configure({showSpinner:false,minimum:0.2});

// ═══ DEFAULTS ═══
// ACCOUNTS ya no se usa — el login ahora verifica contra USERS en localStorage
const PAL = ['#00d4aa','#a78bfa','#38bdf8','#f59e0b','#10b981','#ff4560','#0066ff','#f43f5e'];
const DEF_USERS=[
  {id:1,name:'Carlos Hernández',  email:'C_Hernández@gestion.hn',  pass:'C_Hernández123',  role:'admin',    status:'activo',   last:'Hoy 09:42',    init:'CH',color:'#00d4aa'},
  {id:2,name:'Ashley Henderson',  email:'A_Henderson@gestion.hn',  pass:'A_Henderson123',  role:'admin',    status:'activo',   last:'Hoy 08:15',    init:'AH',color:'#a78bfa'},
  {id:3,name:'Steven Haces',      email:'S.Haces@gestion.hn',      pass:'S.Haces123',      role:'admin',    status:'activo',   last:'Hoy 07:30',    init:'SH',color:'#0066ff'},
  {id:4,name:'Gabriela Gutiérrez',email:'G_gutiérrez@gestion.hn',  pass:'G_gutiérrez123',  role:'empleado', status:'activo',   last:'Hoy 10:01',    init:'GG',color:'#38bdf8'},
  {id:5,name:'Jonathan Godoy',    email:'jgodoy@gestion.hn',       pass:'jgodoy123',       role:'empleado', status:'activo',   last:'Hace 3 días',  init:'JG',color:'#f59e0b'},
];
const DEF_PROD=[{id:1,name:'Café Molido 500g',cat:'Bebidas',sku:'CAF-001',stock:45,min:10,price:85,cost:50,prov:1},{id:2,name:'Azúcar Blanca 1kg',cat:'Abarrotes',sku:'AZU-001',stock:8,min:15,price:32,cost:20,prov:2},{id:3,name:'Aceite Vegetal 1L',cat:'Abarrotes',sku:'ACE-001',stock:0,min:10,price:68,cost:42,prov:2},{id:4,name:'Papel Bond Resma',cat:'Papelería',sku:'PAP-001',stock:22,min:5,price:145,cost:90,prov:3},{id:5,name:'Bolígrafo Negro x12',cat:'Papelería',sku:'BOL-001',stock:4,min:10,price:48,cost:28,prov:3},{id:6,name:'Detergente 1kg',cat:'Limpieza',sku:'DET-001',stock:18,min:8,price:55,cost:35,prov:4},{id:7,name:'Escoba Plástica',cat:'Limpieza',sku:'ESC-001',stock:6,min:4,price:120,cost:75,prov:4},{id:8,name:'Cuaderno 100h',cat:'Papelería',sku:'CUA-001',stock:35,min:10,price:38,cost:22,prov:3}];
const DEF_PROV=[{id:1,name:'CafePremium Honduras',contact:'Luis Amador',tel:'+504 9876-5432',email:'luis@cafepremium.hn',cat:'Bebidas y Alimentos',status:'activo',nota:'Proveedor principal de café. Entrega martes y jueves.'},{id:2,name:'Distribuidora San José',contact:'Rosa Mejía',tel:'+504 8765-4321',email:'rosa@dsjose.hn',cat:'Abarrotes',status:'activo',nota:'Despacho mínimo L 2,000. Crédito a 30 días.'},{id:3,name:'Papelería Central S.A.',contact:'Marco Soto',tel:'+504 7654-3210',email:'marco@papelcentral.hn',cat:'Papelería y Oficina',status:'activo',nota:'Descuento 10% por volumen.'},{id:4,name:'Limpieza Total HN',contact:'Ana Reyes',tel:'+504 6543-2109',email:'ana@limpiezatotal.hn',cat:'Productos de Limpieza',status:'activo',nota:'Entrega semanal los lunes.'},{id:5,name:'TecnoSupply HN',contact:'Jorge Cruz',tel:'+504 5432-1098',email:'jorge@tecnosupply.hn',cat:'Tecnología',status:'inactivo',nota:'Suspendido temporalmente.'},{id:6,name:'Agro Honduras S.A.',contact:'Pedro Flores',tel:'+504 4321-0987',email:'pedro@agrohn.hn',cat:'Agropecuario',status:'activo',nota:'Proveedor de temporada.'}];
const DEF_VENTAS=[{id:1,fecha:'2026-03-01',prodId:1,prod:'Café Molido 500g',qty:10,precio:85,total:850,emp:'Gabriela G.',status:'completada'},{id:2,fecha:'2026-03-02',prodId:4,prod:'Papel Bond Resma',qty:5,precio:145,total:725,emp:'Gabriela G.',status:'completada'},{id:3,fecha:'2026-03-03',prodId:6,prod:'Detergente 1kg',qty:8,precio:55,total:440,emp:'Carlos H.',status:'completada'},{id:4,fecha:'2026-03-05',prodId:8,prod:'Cuaderno 100h',qty:20,precio:38,total:760,emp:'Gabriela G.',status:'completada'},{id:5,fecha:'2026-03-07',prodId:1,prod:'Café Molido 500g',qty:15,precio:85,total:1275,emp:'Carlos H.',status:'completada'}];
const DEF_COMPRAS=[{id:1,fecha:'2026-02-28',provId:1,prov:'CafePremium Honduras',prodId:1,prod:'Café Molido 500g',qty:50,costo:50,total:2500,status:'completada'},{id:2,fecha:'2026-03-01',provId:2,prov:'Distribuidora San José',prodId:2,prod:'Azúcar Blanca 1kg',qty:30,costo:20,total:600,status:'completada'},{id:3,fecha:'2026-03-04',provId:3,prov:'Papelería Central S.A.',prodId:4,prod:'Papel Bond Resma',qty:20,costo:90,total:1800,status:'pendiente'},{id:4,fecha:'2026-03-06',provId:4,prov:'Limpieza Total HN',prodId:6,prod:'Detergente 1kg',qty:25,costo:35,total:875,status:'completada'}];
const DEF_MOVS=[{id:1,fecha:'2026-03-01',prodId:1,prod:'Café Molido 500g',tipo:'entrada',qty:50,resp:'Carlos H.',nota:'Compra proveedor'},{id:2,fecha:'2026-03-01',prodId:1,prod:'Café Molido 500g',tipo:'salida',qty:10,resp:'Gabriela G.',nota:'Venta #1'},{id:3,fecha:'2026-03-03',prodId:3,prod:'Aceite Vegetal 1L',tipo:'salida',qty:5,resp:'Gabriela G.',nota:'Venta mostrador'},{id:4,fecha:'2026-03-05',prodId:2,prod:'Azúcar Blanca 1kg',tipo:'ajuste',qty:-2,resp:'Carlos H.',nota:'Merma detectada'}];

// ═══ LOCALSTORAGE ═══
const LS={get:(k,d)=>{try{const v=localStorage.getItem('sga_'+k);return v?JSON.parse(v):d;}catch{return d;}},set:(k,v)=>{try{localStorage.setItem('sga_'+k,JSON.stringify(v));}catch(e){}},clear:()=>{Object.keys(localStorage).filter(k=>k.startsWith('sga_')).forEach(k=>localStorage.removeItem(k));}};

// Control de versión: si cambió, limpiar datos viejos y usar los nuevos defaults
const APP_VERSION = 'v4.2';
if(LS.get('app_version','') !== APP_VERSION){
  LS.clear();
  LS.set('app_version', APP_VERSION);
}

// ═══ STATE ═══
let CU=null;
let USERS=LS.get('users',DEF_USERS);
let PRODUCTS=LS.get('products',DEF_PROD);
let PROVEEDORES=LS.get('proveedores',DEF_PROV);
let VENTAS=LS.get('ventas',DEF_VENTAS);
let COMPRAS=LS.get('compras',DEF_COMPRAS);
let MOVIMIENTOS=LS.get('movimientos',DEF_MOVS);
let nxtUser=LS.get('nxtUser',6),nxtProd=LS.get('nxtProd',9),nxtProv=LS.get('nxtProv',7);
let nxtVenta=LS.get('nxtVenta',6),nxtCompra=LS.get('nxtCompra',5),nxtMov=LS.get('nxtMov',5);
function save(){LS.set('users',USERS);LS.set('products',PRODUCTS);LS.set('proveedores',PROVEEDORES);LS.set('ventas',VENTAS);LS.set('compras',COMPRAS);LS.set('movimientos',MOVIMIENTOS);LS.set('nxtUser',nxtUser);LS.set('nxtProd',nxtProd);LS.set('nxtProv',nxtProv);LS.set('nxtVenta',nxtVenta);LS.set('nxtCompra',nxtCompra);LS.set('nxtMov',nxtMov);}

// ═══ HELPERS ═══
const $=id=>document.getElementById(id);
const fmt=n=>'L '+Number(n).toLocaleString('es-HN',{minimumFractionDigits:2,maximumFractionDigits:2});
const today=()=>new Date().toISOString().split('T')[0];
let chartWeekly=null,chartMonthly=null;

// Flatpickr instances
let fpMV=null,fpMC=null,fpMM=null,fpHD=null,fpHH=null;

function initFlatpickr(){
  const base={locale:'es',dateFormat:'Y-m-d',disableMobile:true};
  // Para modales: appendTo hace que el calendario se adjunte al body para evitar clipping
  const modalOpts={...base,defaultDate:'today',appendTo:document.body};
  const filterOpts={...base,dateFormat:'d/m/Y',appendTo:document.body};
  fpMV=flatpickr('#mv-fecha',modalOpts);
  fpMC=flatpickr('#mc-fecha',modalOpts);
  fpMM=flatpickr('#mm-fecha',modalOpts);
  fpHD=flatpickr('#hist-desde',{...filterOpts,defaultDate:null});
  fpHH=flatpickr('#hist-hasta',{...filterOpts,defaultDate:null});
  flatpickr('#rpt-desde',{...filterOpts,defaultDate:null});
  flatpickr('#rpt-hasta',{...filterOpts,defaultDate:null});
}

// Obtener valor Y-m-d del flatpickr, con fallback al valor del input
function getFP(fp,inputId){
  if(fp&&fp.selectedDates&&fp.selectedDates[0]){
    const d=fp.selectedDates[0];
    return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  }
  return $(inputId)?$(inputId).value:'';
}

// ═══ LOGIN ═══
function fill(u,p){$('l-user').value=u;$('l-pass').value=p;}
function doLogin(){
  NProgress.start();
  const inputUser=$('l-user').value.trim().toLowerCase();
  const inputPass=$('l-pass').value;
  // Buscar en USERS (localStorage) por email o nombre
  const found = USERS.find(u =>
    u.email.toLowerCase() === inputUser && u.pass === inputPass
  );
  setTimeout(()=>{
    NProgress.done();
    if(found && found.status === 'activo'){
      CU = {
        email: found.email,
        role: found.role,
        name: found.name,
        initials: found.init
      };
      bootApp();
      $('login-screen').classList.remove('active');
      $('app-screen').classList.add('active');
    } else if(found && found.status === 'inactivo'){
      Swal.fire({icon:'warning',title:'Cuenta inactiva',text:'Tu cuenta está deshabilitada. Contacta al administrador.',background:'var(--surface)',color:'var(--text)',confirmButtonText:'Entendido',customClass:{confirmButton:'swal2-confirm'},buttonsStyling:false});
    } else {
      Swal.fire({icon:'error',title:'Credenciales incorrectas',text:'Verifica tu correo y contraseña.',background:'var(--surface)',color:'var(--text)',confirmButtonText:'Reintentar',customClass:{confirmButton:'swal2-confirm'},buttonsStyling:false});
      $('l-pass').value='';
    }
  },600);
}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&$('login-screen').classList.contains('active'))doLogin();});
function doLogout(){
  SWL.fire({title:'¿Cerrar sesión?',html:'Tus datos están guardados automáticamente.',icon:'question',showCancelButton:true,confirmButtonText:'Sí, salir',cancelButtonText:'Cancelar',reverseButtons:true}).then(r=>{
    if(r.isConfirmed){CU=null;$('app-screen').classList.remove('active');$('login-screen').classList.add('active');$('l-user').value='';$('l-pass').value='';}
  });
}

// ═══ BOOT ═══
function bootApp(){
  NProgress.start();
  const isAdmin=CU.role==='admin';
  $('sb-av').textContent=CU.initials;$('sb-name').textContent=CU.name;$('sb-role').textContent=CU.role;
  $('p-av').textContent=CU.initials;$('p-name').textContent=CU.name;$('p-email').textContent=CU.email;
  $('p-name-in').value=CU.name;$('p-email-in').value=CU.email;
  $('p-badge').textContent=isAdmin?'ADMIN':'EMPLEADO';$('p-badge').className='badge '+(isAdmin?'badge-admin':'badge-emp');
  $('role-badge').textContent=isAdmin?'ADMINISTRADOR':'EMPLEADO';$('role-badge').className='badge '+(isAdmin?'badge-admin':'badge-emp');
  $('topbar-date').textContent=new Date().toLocaleDateString('es-HN',{weekday:'short',day:'numeric',month:'short',year:'numeric'});

  // FIX PRINCIPAL: Asignar onclick directamente, NO usar null para admin
  // Para admin: asignamos la función correcta
  // Para empleado: asignamos función que muestra error
  const adminBtns={
    'btn-add-user':()=>{ resetUserModal(); openModal('modal-user'); },
    'btn-add-prod':()=>{ populateSelects(); openModal('modal-prod'); },
    'btn-add-prov':()=>openModal('modal-prov')
  };
  Object.entries(adminBtns).forEach(([id,fn])=>{
    const b=$(id); if(!b)return;
    if(isAdmin){
      b.disabled=false; b.classList.remove('btn-disabled');
      b.onclick=fn;
    } else {
      b.disabled=false; b.classList.add('btn-disabled');
      b.onclick=(e)=>{e.preventDefault();e.stopPropagation();toast('Solo administradores pueden realizar esta acción','error');};
    }
  });

  initFlatpickr();
  renderAll();
  renderDashboard();
  checkLowStock();
  setTimeout(()=>NProgress.done(),500);
}

// ═══ MODALES ═══
function openModal(id){
  // Actualizar selects antes de abrir
  populateSelects();
  $(id).classList.add('open');
}
function closeModal(id){$(id).classList.remove('open');}
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open');}));

// ═══ RENDER ALL ═══
function renderAll(){
  renderUsers(USERS);renderInv(PRODUCTS);renderProvs(PROVEEDORES);
  renderVentas(VENTAS);renderCompras(COMPRAS);renderMovs(MOVIMIENTOS);
  renderHistorial();refreshInvStats();refreshVentasStats();refreshComprasStats();
  refreshProvStats();refreshUserStats();renderRInv();renderROps();refreshReportStats();
}

// ═══ CHARTS ═══
function renderDashboard(){
  const days=['Lu','Ma','Mi','Ju','Vi','Sa','Do'];
  const wvals=[4200,6100,3800,8400,5500,9200,7100];
  if(chartWeekly){chartWeekly.destroy();}
  const ctxW=$('chart-weekly').getContext('2d');
  const gW=ctxW.createLinearGradient(0,0,0,160);gW.addColorStop(0,'rgba(0,212,170,.9)');gW.addColorStop(1,'rgba(0,102,255,.6)');
  chartWeekly=new Chart(ctxW,{type:'bar',data:{labels:days,datasets:[{label:'Ventas (L)',data:wvals,backgroundColor:gW,borderRadius:6,borderSkipped:false,hoverBackgroundColor:'rgba(0,212,170,1)'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>'L '+c.raw.toLocaleString()},backgroundColor:'#161b27',titleColor:'#e2eaf8',bodyColor:'#8ba3be',borderColor:'#2a3547',borderWidth:1,padding:10,cornerRadius:8,boxPadding:4}},scales:{x:{grid:{display:false},ticks:{color:'#5a7494',font:{size:11,family:'JetBrains Mono'}}},y:{grid:{color:'rgba(33,41,58,.6)'},ticks:{color:'#5a7494',font:{size:10,family:'JetBrains Mono'},callback:v=>'L'+v/1000+'k'}}}}});

  const months=['Ago','Sep','Oct','Nov','Dic','Ene','Feb','Mar'];
  const mvals=[52000,61000,48000,73000,95000,68000,71000,84320];
  if(chartMonthly){chartMonthly.destroy();}
  const ctxM=$('chart-monthly').getContext('2d');
  const gM=ctxM.createLinearGradient(0,0,0,200);gM.addColorStop(0,'rgba(0,212,170,.4)');gM.addColorStop(1,'rgba(0,212,170,.02)');
  chartMonthly=new Chart(ctxM,{type:'line',data:{labels:months,datasets:[{label:'Ventas (L)',data:mvals,borderColor:'#00d4aa',backgroundColor:gM,fill:true,tension:0.4,pointBackgroundColor:'#00d4aa',pointBorderColor:'#0d1117',pointBorderWidth:2,pointRadius:5,pointHoverRadius:7}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>'L '+c.raw.toLocaleString()},backgroundColor:'#161b27',titleColor:'#e2eaf8',bodyColor:'#8ba3be',borderColor:'#2a3547',borderWidth:1,padding:10,cornerRadius:8}},scales:{x:{grid:{color:'rgba(33,41,58,.5)'},ticks:{color:'#5a7494',font:{size:11,family:'JetBrains Mono'}}},y:{grid:{color:'rgba(33,41,58,.5)'},ticks:{color:'#5a7494',font:{size:10,family:'JetBrains Mono'},callback:v=>'L'+v/1000+'k'}}}}});

  // Stats dashboard
  const mes=VENTAS.filter(v=>v.fecha.startsWith('2026-03'));
  const mesC=COMPRAS.filter(c=>c.fecha.startsWith('2026-03'));
  $('dash-ventas-mes').textContent=fmt(mes.reduce((s,v)=>s+v.total,0));
  $('dash-ventas-sub').textContent=mes.length+' transacciones';
  $('dash-compras-mes').textContent=fmt(mesC.reduce((s,c)=>s+c.total,0));
  $('dash-compras-sub').textContent=mesC.length+' órdenes';
  $('dash-stock').textContent=PRODUCTS.reduce((s,p)=>s+p.stock,0);
  $('dash-provs').textContent=PROVEEDORES.filter(p=>p.status==='activo').length;
  const low=PRODUCTS.filter(p=>p.stock<=p.min);
  const swEl=$('dash-stock-warn');
  if(low.length){swEl.textContent='⚠ '+low.length+' con stock bajo';swEl.className='stat-trend trend-dn';}
  else{swEl.textContent='✓ Stock saludable';swEl.className='stat-trend trend-up';}
  $('dash-low-alert').style.display=low.length?'flex':'none';
  if(low.length)$('dash-low-txt').textContent=low.map(p=>p.name).join(', ')+' están bajo el mínimo.';
  const top=[['Café Molido 500g',fmt(12750),'↑'],['Papel Bond Resma',fmt(8700),'↑'],['Azúcar Blanca 1kg',fmt(6400),'→'],['Cuaderno 100h',fmt(4940),'↓'],['Detergente 1kg',fmt(3850),'↑']];
  $('top-products').innerHTML=top.map(([n,v,t])=>`<li><span>${n}</span><span class="mono fw-700 text-success">${v} <span style="font-size:10px;">${t}</span></span></li>`).join('');
  $('recent-ops').innerHTML=VENTAS.slice(-4).reverse().map(v=>`<li><div><div class="fw-700" style="font-size:12px;">${v.prod}</div><div class="text-muted" style="font-size:11px;">${v.fecha}</div></div><span class="mono text-success fw-700">${fmt(v.total)}</span></li>`).join('');
  $('recent-provs').innerHTML=PROVEEDORES.slice(0,4).map(p=>`<li><div><div class="fw-700" style="font-size:12px;">${p.name}</div><div class="text-muted" style="font-size:11px;">${p.cat}</div></div><span class="badge ${p.status==='activo'?'badge-success':'badge-danger'}">${p.status.toUpperCase()}</span></li>`).join('');
}

// ═══ USUARIOS ═══
function renderUsers(list){
  const isAdmin = CU && CU.role==='admin';
  $('users-tbody').innerHTML = list.map(u=>{
    const isSelf = CU && CU.email === u.email;
    // Empleado: solo puede editar su propio usuario. Admin: puede editar y borrar a todos.
    const canEdit   = isAdmin || isSelf;
    const canDelete = isAdmin && !isSelf; // nadie se puede borrar a sí mismo
    return `<tr>
      <td><div class="user-cell"><div class="avatar av-md" style="background:${u.color};">${u.init}</div><div><div class="cell-main">${u.name}</div><div class="cell-sub">${u.email}</div></div></div></td>
      <td><span class="badge ${u.role==='admin'?'badge-admin':'badge-emp'}">${u.role.toUpperCase()}</span></td>
      <td><span class="status-pill"><span class="dot ${u.status==='activo'?'dot-on':'dot-off'}"></span>${u.status.charAt(0).toUpperCase()+u.status.slice(1)}</span></td>
      <td class="text-muted mono hide-mobile" style="font-size:12px;">${u.last}</td>
      <td><div style="display:flex;gap:6px;">
        ${canEdit   ? `<button class="btn-icon-sm" onclick="editUser(${u.id})" title="Editar">✏️</button>` : ''}
        ${canDelete ? `<button class="btn-icon-sm red" onclick="deleteUser(${u.id})" title="Eliminar">🗑️</button>` : ''}
      </div></td>
    </tr>`;
  }).join('');
}
// Abrir modal con datos del usuario para editar
function editUser(id){
  const u = USERS.find(x=>x.id===id); if(!u) return;
  const isAdmin = CU && CU.role==='admin';
  const isSelf  = CU && CU.email===u.email;

  // Seguridad: empleado solo puede editar su propio perfil
  if(!isAdmin && !isSelf){ toast('Sin permisos para editar este usuario','error'); return; }

  $('mu-title').textContent = isSelf ? 'Editar mi Perfil' : `Editar: ${u.name}`;
  $('mu-name').value  = u.name;
  $('mu-email').value = u.email;
  $('mu-pass').value  = '';
  $('mu-pass').placeholder = 'Dejar vacío para no cambiar contraseña';
  $('mu-role').value   = u.role;
  $('mu-status').value = u.status;

  // Admin puede cambiar correo, rol y estado de cualquiera
  // Empleado editando su propio perfil: puede cambiar correo, pero NO su rol ni estado
  const emailEditable  = true; // todos pueden cambiar su correo
  const roleEditable   = isAdmin;
  const statusEditable = isAdmin;

  $('mu-email').readOnly     = !emailEditable;
  $('mu-email').style.opacity = emailEditable ? '1' : '.5';

  $('mu-role').disabled       = !roleEditable;
  $('mu-role').style.opacity  = roleEditable ? '1' : '.5';
  $('mu-role').title          = roleEditable ? '' : 'Solo administradores pueden cambiar el rol';

  $('mu-status').disabled      = !statusEditable;
  $('mu-status').style.opacity = statusEditable ? '1' : '.5';
  $('mu-status').title         = statusEditable ? '' : 'Solo administradores pueden cambiar el estado';

  $('mu-save-btn').onclick = ()=>updateUser(id);
  openModal('modal-user');
}
function updateUser(id){
  const u = USERS.find(x=>x.id===id); if(!u) return;
  const isAdmin = CU && CU.role==='admin';
  const isSelf  = CU && CU.email===u.email;

  const name   = $('mu-name').value.trim();
  const email  = $('mu-email').value.trim().toLowerCase();
  const pass   = $('mu-pass').value;
  const role   = isAdmin ? $('mu-role').value   : u.role;   // solo admin puede cambiar
  const status = isAdmin ? $('mu-status').value : u.status; // solo admin puede cambiar

  if(!name)  { toast('El nombre es requerido','error'); return; }
  if(!email) { toast('El correo es requerido','error'); return; }
  if(pass && pass.length<6){ toast('La contraseña debe tener al menos 6 caracteres','error'); return; }

  // Verificar que el nuevo correo no lo use otro usuario
  const emailConflict = USERS.find(x=> x.id!==id && x.email.toLowerCase()===email);
  if(emailConflict){ toast('Ese correo ya está en uso por otro usuario','error'); return; }

  const oldEmail = u.email;

  // Actualizar objeto en array
  u.name   = name;
  u.email  = email;
  u.role   = role;
  u.status = status;
  u.init   = name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  if(pass)  u.pass = pass;

  // Si se editó el propio usuario, sincronizar sesión activa
  if(isSelf){
    CU.name     = name;
    CU.email    = email; // correo actualizado
    CU.role     = role;
    CU.initials = u.init;
    $('sb-name').textContent  = name;
    $('sb-av').textContent    = u.init;
    $('sb-role').textContent  = role;
    $('p-name').textContent   = name;
    $('p-email').textContent  = email;
    $('p-name-in').value      = name;
    $('p-email-in').value     = email;
    $('role-badge').textContent = role==='admin'?'ADMINISTRADOR':'EMPLEADO';
    $('role-badge').className   = 'badge '+(role==='admin'?'badge-admin':'badge-emp');
    $('p-badge').textContent    = role==='admin'?'ADMIN':'EMPLEADO';
    $('p-badge').className      = 'badge '+(role==='admin'?'badge-admin':'badge-emp');
  }

  save(); renderUsers(USERS); refreshUserStats();
  closeModal('modal-user'); resetUserModal();
  toast(`Usuario "${name}" actualizado correctamente`,'success');
}
function resetUserModal(){
  $('mu-title').textContent    = 'Nuevo Usuario';
  $('mu-email').readOnly       = false;
  $('mu-email').style.opacity  = '1';
  $('mu-role').disabled        = false;
  $('mu-role').style.opacity   = '1';
  $('mu-role').title           = '';
  $('mu-status').disabled      = false;
  $('mu-status').style.opacity = '1';
  $('mu-status').title         = '';
  $('mu-pass').placeholder     = 'Mínimo 6 caracteres';
  $('mu-pass').type            = 'password'; // reset visibility
  const eyeBtn = $('mu-pass').parentElement.querySelector('.eye-btn');
  if(eyeBtn){ eyeBtn.querySelector('.eye-open').style.display=''; eyeBtn.querySelector('.eye-closed').style.display='none'; }
  $('mu-save-btn').onclick      = saveUser;
  clearForm(['mu-name','mu-email','mu-pass']);
}
function filterUsers(q){renderUsers(USERS.filter(u=>u.name.toLowerCase().includes(q.toLowerCase())||u.email.toLowerCase().includes(q.toLowerCase())));}
function refreshUserStats(){$('u-total').textContent=USERS.length;$('u-admins').textContent=USERS.filter(u=>u.role==='admin').length;$('u-emps').textContent=USERS.filter(u=>u.role==='empleado').length;$('u-active').textContent=USERS.filter(u=>u.status==='activo').length;}
async function deleteUser(id){
  if(CU.role!=='admin'){ toast('Solo administradores pueden eliminar usuarios','error'); return; }
  const u = USERS.find(x=>x.id===id);
  if(CU.email === u?.email){ toast('No puedes eliminar tu propia cuenta','warning'); return; }
  if(!await confirmDlg('¿Eliminar usuario?',`Eliminar a <strong>${u?.name}</strong> permanentemente.`)) return;
  USERS=USERS.filter(u=>u.id!==id); save(); renderUsers(USERS); refreshUserStats();
  toast('Usuario eliminado','success');
}
function saveUser(){
  const name=$('mu-name').value.trim(),email=$('mu-email').value.trim(),pass=$('mu-pass').value,role=$('mu-role').value,status=$('mu-status').value;
  if(!name||!email||!pass){toast('Completa todos los campos requeridos','error');return;}
  if(pass.length<6){toast('La contraseña debe tener al menos 6 caracteres','error');return;}
  if(USERS.find(u=>u.email===email)){toast('El correo ya está registrado','error');return;}
  const init=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  USERS.push({id:nxtUser++,name,email,pass,role,status,last:'Ahora',init,color:PAL[nxtUser%PAL.length]});
  save();renderUsers(USERS);refreshUserStats();
  closeModal('modal-user');clearForm(['mu-name','mu-email','mu-pass']);
  toast(`Usuario "${name}" agregado — ya puede iniciar sesión`,'success');
}
function saveProfile(){
  const name    = $('p-name-in').value.trim();
  const email   = $('p-email-in').value.trim().toLowerCase();
  const newpass = $('p-newpass').value;

  if(!name)  { toast('El nombre no puede estar vacío','error'); return; }
  if(!email) { toast('El correo no puede estar vacío','error'); return; }
  if(newpass && newpass.length<6){ toast('La contraseña debe tener al menos 6 caracteres','error'); return; }

  // Verificar que el nuevo correo no lo use otro usuario
  const conflict = USERS.find(x=> x.email.toLowerCase()===email && x.email.toLowerCase()!==CU.email.toLowerCase());
  if(conflict){ toast('Ese correo ya está en uso por otro usuario','error'); return; }

  // Actualizar en USERS
  const u = USERS.find(x => x.email.toLowerCase() === CU.email.toLowerCase());
  if(u){
    u.name  = name;
    u.email = email;
    u.init  = name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    if(newpass) u.pass = newpass;
  }

  // Actualizar sesión activa
  CU.name     = name;
  CU.email    = email;
  CU.initials = u ? u.init : CU.initials;

  // Reflejar en UI
  $('sb-name').textContent  = name;
  $('sb-av').textContent    = CU.initials;
  $('p-name').textContent   = name;
  $('p-email').textContent  = email;
  $('p-name-in').value      = name;
  $('p-email-in').value     = email;
  $('p-newpass').value      = '';

  save();
  renderUsers(USERS);

  const msg = newpass ? 'Perfil y contraseña actualizados' : 'Perfil actualizado correctamente';
  toast(msg, 'success');
}
function utab(btn,tab){document.querySelectorAll('#panel-usuarios .tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');$('u-list').style.display=tab==='u-list'?'block':'none';$('u-perfil').style.display=tab==='u-perfil'?'block':'none';}

// ═══ INVENTARIO ═══
function renderInv(list){
  $('inv-tbody').innerHTML=list.map(p=>{
    const stC=p.stock===0?'var(--danger)':p.stock<=p.min?'var(--warning)':'var(--success)';
    const stL=p.stock===0?'Agotado':p.stock<=p.min?'Crítico':'Normal';
    const stD=p.stock===0?'dot-red':p.stock<=p.min?'dot-warn':'dot-on';
    const pct=p.min>0?Math.min(100,Math.round(p.stock/Math.max(p.stock,p.min*3)*100)):100;
    return `<tr>
      <td><div class="cell-main">${p.name}</div><div class="cell-sub">${p.sku}</div></td>
      <td><span class="badge badge-info" style="font-size:10px;">${p.cat}</span></td>
      <td><div style="font-weight:700;color:${stC};">${p.stock} u.</div><div class="prog-bar" style="width:100px;margin-top:5px;"><div class="prog-fill" style="width:${pct}%;background:${stC};"></div></div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;">Mín: ${p.min}</div></td>
      <td class="mono fw-700 text-accent">${fmt(p.price)}</td>
      <td><span class="status-pill"><span class="dot ${stD}"></span>${stL}</span></td>
      <td><div style="display:flex;gap:6px;">
        <button class="btn-icon-sm" onclick="editProd(${p.id})" title="Editar">✏️</button>
        ${CU&&CU.role==='admin'?`<button class="btn-icon-sm red" onclick="deleteProd(${p.id})" title="Eliminar">🗑️</button>`:''}
      </div></td>
    </tr>`;
  }).join('');
}
function filterInv(q){const cat=$('cat-filter').value;renderInv(PRODUCTS.filter(p=>(p.name.toLowerCase().includes(q.toLowerCase())||p.sku.toLowerCase().includes(q.toLowerCase()))&&(cat===''||p.cat===cat)));}
function filterInvCat(cat){renderInv(cat?PRODUCTS.filter(p=>p.cat===cat):PRODUCTS);}
function refreshInvStats(){
  $('inv-total').textContent=PRODUCTS.length;
  $('inv-valor').textContent=fmt(PRODUCTS.reduce((s,p)=>s+p.cost*p.stock,0));
  $('inv-critico').textContent=PRODUCTS.filter(p=>p.stock>0&&p.stock<=p.min).length;
  $('inv-cero').textContent=PRODUCTS.filter(p=>p.stock===0).length;
  const cats=[...new Set(PRODUCTS.map(p=>p.cat))];
  const cf=$('cat-filter'),cur=cf.value;
  cf.innerHTML='<option value="">Todas las categorías</option>'+cats.map(c=>`<option value="${c}"${c===cur?' selected':''}>${c}</option>`).join('');
}
function checkLowStock(){
  const low=PRODUCTS.filter(p=>p.stock<=p.min);
  const el=$('inv-alerts');el.innerHTML='';
  const badge=$('inv-alert-badge');
  if(low.length){badge&&(badge.style.display='inline-block');low.forEach(p=>{el.innerHTML+=`<div class="alert ${p.stock===0?'alert-danger':'alert-warn'}"><span>${p.stock===0?'🚫':'⚠️'}</span><div><strong>${p.name}</strong> — Stock: ${p.stock} / Mínimo: ${p.min}${p.stock===0?' — AGOTADO':''}</div></div>`;});}
  else{badge&&(badge.style.display='none');}
}
function editProd(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  $('mp-title').textContent='Editar Producto';$('mp-id').value=id;
  $('mp-name').value=p.name;$('mp-cat').value=p.cat;$('mp-sku').value=p.sku;
  $('mp-stock').value=p.stock;$('mp-min').value=p.min;$('mp-precio').value=p.price;$('mp-costo').value=p.cost;
  populateSelects();$('mp-prov').value=p.prov;
  openModal('modal-prod');
}
function saveProd(){
  const name=$('mp-name').value.trim(),cat=$('mp-cat').value.trim(),sku=$('mp-sku').value.trim();
  const stock=parseInt($('mp-stock').value)||0,min=parseInt($('mp-min').value)||0;
  const price=parseFloat($('mp-precio').value)||0,cost=parseFloat($('mp-costo').value)||0;
  const prov=parseInt($('mp-prov').value)||0,editId=parseInt($('mp-id').value)||0;
  if(!name||!cat||!sku){toast('Nombre, categoría y SKU son requeridos','error');return;}
  if(editId){const i=PRODUCTS.findIndex(p=>p.id===editId);if(i>=0)PRODUCTS[i]={...PRODUCTS[i],name,cat,sku,stock,min,price,cost,prov};toast(`"${name}" actualizado`,'success');}
  else{PRODUCTS.push({id:nxtProd++,name,cat,sku,stock,min,price,cost,prov});toast(`"${name}" agregado`,'success');}
  save();renderInv(PRODUCTS);refreshInvStats();checkLowStock();renderRInv();populateSelects();
  closeModal('modal-prod');$('mp-id').value='';$('mp-title').textContent='Nuevo Producto';
  clearForm(['mp-name','mp-cat','mp-sku','mp-stock','mp-min','mp-precio','mp-costo']);
}
async function deleteProd(id){
  if(CU.role!=='admin'){toast('Sin permisos','error');return;}
  const p=PRODUCTS.find(x=>x.id===id);
  if(!await confirmDlg('¿Eliminar producto?',`Eliminar <strong>${p?.name}</strong> del inventario.`))return;
  PRODUCTS=PRODUCTS.filter(p=>p.id!==id);save();renderInv(PRODUCTS);refreshInvStats();checkLowStock();renderRInv();populateSelects();
  toast('Producto eliminado','success');
}
function renderMovs(list){$('mov-tbody').innerHTML=list.map(m=>{const c=m.tipo==='entrada'?'text-success':m.tipo==='salida'?'text-danger':'text-warning';const ic=m.tipo==='entrada'?'↑':m.tipo==='salida'?'↓':'⇄';return `<tr><td class="mono text-muted" style="font-size:12px;">${m.fecha}</td><td class="fw-700">${m.prod}</td><td><span class="badge ${m.tipo==='entrada'?'badge-success':m.tipo==='salida'?'badge-danger':'badge-warning'}">${m.tipo.toUpperCase()}</span></td><td class="${c} fw-700 mono">${ic} ${Math.abs(m.qty)}</td><td>${m.resp}</td><td class="text-muted" style="font-size:12px;">${m.nota}</td></tr>`;}).join('');}
function saveMov(){
  const tipo=$('mm-tipo').value,prodId=parseInt($('mm-prod').value);
  const qty=parseInt($('mm-qty').value)||0;
  const fecha=getFP(fpMM,'mm-fecha'),nota=$('mm-nota').value.trim();
  if(!prodId||!qty||!fecha){toast('Completa todos los campos requeridos','error');return;}
  const prod=PRODUCTS.find(p=>p.id===prodId);if(!prod)return;
  const realQty=tipo==='salida'?-qty:qty;
  prod.stock=Math.max(0,prod.stock+realQty);
  MOVIMIENTOS.push({id:nxtMov++,fecha,prodId,prod:prod.name,tipo,qty:realQty,resp:CU.name,nota});
  save();renderMovs(MOVIMIENTOS);renderInv(PRODUCTS);refreshInvStats();checkLowStock();
  closeModal('modal-mov');clearForm(['mm-qty','mm-nota']);
  toast(`Movimiento ${tipo} de ${Math.abs(qty)} u. registrado`,'success');
}
function itab(btn,tab){document.querySelectorAll('#panel-inventario .tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');$('inv-list').style.display=tab==='inv-list'?'block':'none';$('inv-mov').style.display=tab==='inv-mov'?'block':'none';}

// ═══ PROVEEDORES ═══
function renderProvs(list){
  $('prov-grid').innerHTML=list.length?list.map(p=>`
    <div class="prov-card">
      <div class="prov-header"><div class="avatar av-md" style="background:${PAL[p.id%PAL.length]};">${p.name.charAt(0)}</div><div><div class="cell-main">${p.name}</div><div class="cell-sub">${p.cat}</div></div><span class="badge ${p.status==='activo'?'badge-success':'badge-danger'}" style="margin-left:auto;">${p.status.toUpperCase()}</span></div>
      <div class="prov-body">📞 <span>${p.tel}</span><br>✉️ <span>${p.email}</span><br>👤 <span>${p.contact}</span><br>📝 <span style="color:var(--text-muted);font-size:11px;">${p.nota}</span></div>
      <div class="prov-footer">
        <button class="btn btn-ghost btn-xs" onclick="editProv(${p.id})">✏️ Editar</button>
        ${CU&&CU.role==='admin'?`<button class="btn btn-danger-ghost btn-xs" onclick="deleteProv(${p.id})">🗑️</button>`:''}
      </div>
    </div>`).join(''):`<div class="empty-state"><div class="es-icon">🏭</div><h4>Sin proveedores</h4><p>Agrega tu primer proveedor.</p></div>`;
}
function filterProvs(q){renderProvs(PROVEEDORES.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.cat.toLowerCase().includes(q.toLowerCase())||p.contact.toLowerCase().includes(q.toLowerCase())));}
function refreshProvStats(){$('prov-total').textContent=PROVEEDORES.length;$('prov-activos').textContent=PROVEEDORES.filter(p=>p.status==='activo').length;$('prov-cats').textContent=[...new Set(PROVEEDORES.map(p=>p.cat))].length;}
function editProv(id){
  const p=PROVEEDORES.find(x=>x.id===id);if(!p)return;
  $('mpv-title').textContent='Editar Proveedor';$('mpv-id').value=id;
  $('mpv-name').value=p.name;$('mpv-contact').value=p.contact;$('mpv-tel').value=p.tel;
  $('mpv-email').value=p.email;$('mpv-cat').value=p.cat;$('mpv-status').value=p.status;$('mpv-nota').value=p.nota;
  openModal('modal-prov');
}
function saveProv(){
  const name=$('mpv-name').value.trim(),contact=$('mpv-contact').value.trim();
  const tel=$('mpv-tel').value.trim(),email=$('mpv-email').value.trim();
  const cat=$('mpv-cat').value.trim(),status=$('mpv-status').value,nota=$('mpv-nota').value.trim();
  const editId=parseInt($('mpv-id').value)||0;
  if(!name||!cat){toast('Nombre y categoría son requeridos','error');return;}
  if(editId){const i=PROVEEDORES.findIndex(p=>p.id===editId);if(i>=0)PROVEEDORES[i]={...PROVEEDORES[i],name,contact,tel,email,cat,status,nota};toast(`"${name}" actualizado`,'success');}
  else{PROVEEDORES.push({id:nxtProv++,name,contact,tel,email,cat,status,nota});toast(`"${name}" agregado`,'success');}
  save();renderProvs(PROVEEDORES);refreshProvStats();populateSelects();
  closeModal('modal-prov');$('mpv-id').value='';$('mpv-title').textContent='Nuevo Proveedor';
  clearForm(['mpv-name','mpv-contact','mpv-tel','mpv-email','mpv-cat','mpv-nota']);
}
async function deleteProv(id){
  if(CU.role!=='admin'){toast('Sin permisos','error');return;}
  const p=PROVEEDORES.find(x=>x.id===id);
  if(!await confirmDlg('¿Eliminar proveedor?',`Eliminar <strong>${p?.name}</strong>.`))return;
  PROVEEDORES=PROVEEDORES.filter(p=>p.id!==id);save();renderProvs(PROVEEDORES);refreshProvStats();
  toast('Proveedor eliminado','success');
}

// ═══ OPERACIONES ═══
function renderVentas(list){$('ventas-tbody').innerHTML=list.length?list.map(v=>`<tr><td class="mono text-muted">#${v.id}</td><td class="mono text-muted" style="font-size:12px;">${v.fecha}</td><td class="fw-700">${v.prod}</td><td class="mono">${v.qty}</td><td class="mono fw-700 text-success">${fmt(v.total)}</td><td>${v.emp}</td><td><span class="badge ${v.status==='completada'?'badge-success':'badge-warning'}">${v.status.toUpperCase()}</span></td><td><button class="btn-icon-sm red" onclick="deleteVenta(${v.id})">🗑️</button></td></tr>`).join(''):`<tr><td colspan="8"><div class="empty-state"><div class="es-icon">💳</div><h4>Sin ventas</h4></div></td></tr>`;}
function refreshVentasStats(){const tod=today(),hoy=VENTAS.filter(v=>v.fecha===tod),mes=VENTAS.filter(v=>v.fecha.startsWith('2026-03'));$('v-hoy').textContent=fmt(hoy.reduce((s,v)=>s+v.total,0));$('v-hoy-n').textContent=hoy.length+' transacciones';$('v-mes').textContent=fmt(mes.reduce((s,v)=>s+v.total,0));$('v-mes-n').textContent=mes.length+' transacciones';const avg=VENTAS.length?VENTAS.reduce((s,v)=>s+v.total,0)/VENTAS.length:0;$('v-prom').textContent=fmt(avg);}
function renderCompras(list){$('compras-tbody').innerHTML=list.length?list.map(c=>`<tr><td class="mono text-muted">#${c.id}</td><td class="mono text-muted" style="font-size:12px;">${c.fecha}</td><td>${c.prov}</td><td class="fw-700">${c.prod}</td><td class="mono">${c.qty}</td><td class="mono fw-700" style="color:var(--warning);">${fmt(c.total)}</td><td><span class="badge ${c.status==='completada'?'badge-success':'badge-warning'}">${c.status.toUpperCase()}</span></td><td><button class="btn-icon-sm red" onclick="deleteCompra(${c.id})">🗑️</button></td></tr>`).join(''):`<tr><td colspan="8"><div class="empty-state"><div class="es-icon">🛒</div><h4>Sin compras</h4></div></td></tr>`;}
function refreshComprasStats(){const mes=COMPRAS.filter(c=>c.fecha.startsWith('2026-03'));$('c-mes').textContent=fmt(mes.reduce((s,c)=>s+c.total,0));$('c-mes-n').textContent=mes.length+' órdenes';$('c-pend').textContent=COMPRAS.filter(c=>c.status==='pendiente').length;$('c-comp').textContent=COMPRAS.filter(c=>c.status==='completada').length;}
function renderHistorial(){
  const all=[...VENTAS.map(v=>({fecha:v.fecha,tipo:'VENTA',desc:v.prod+' x'+v.qty,monto:v.total,user:v.emp})),...COMPRAS.map(c=>({fecha:c.fecha,tipo:'COMPRA',desc:c.prod+' — '+c.prov,monto:-c.total,user:'Compras'}))].sort((a,b)=>b.fecha.localeCompare(a.fecha));
  const desde=getFP(fpHD,'hist-desde'),hasta=getFP(fpHH,'hist-hasta');
  const f=all.filter(r=>(!desde||r.fecha>=desde)&&(!hasta||r.fecha<=hasta));
  $('hist-tbody').innerHTML=f.map(r=>`<tr><td class="mono text-muted" style="font-size:12px;">${r.fecha}</td><td><span class="badge ${r.tipo==='VENTA'?'badge-success':'badge-warning'}">${r.tipo}</span></td><td>${r.desc}</td><td class="mono fw-700 ${r.monto>0?'text-success':'text-danger'}">${r.monto>0?'+':''}${fmt(Math.abs(r.monto))}</td><td>${r.user}</td></tr>`).join('');
}
function autofillVenta(){const p=PRODUCTS.find(x=>x.id===parseInt($('mv-prod').value));if(p){$('mv-precio').value=p.price;calcVenta();}}
function calcVenta(){$('mv-total').value=fmt((parseFloat($('mv-qty').value)||0)*(parseFloat($('mv-precio').value)||0));}
function autofillCompra(){const p=PRODUCTS.find(x=>x.id===parseInt($('mc-prod').value));if(p){$('mc-costo').value=p.cost;calcCompra();}}
function calcCompra(){$('mc-total').value=fmt((parseFloat($('mc-qty').value)||0)*(parseFloat($('mc-costo').value)||0));}
function saveVenta(){
  const prodId=parseInt($('mv-prod').value),qty=parseInt($('mv-qty').value)||0;
  const precio=parseFloat($('mv-precio').value)||0;
  const fecha=getFP(fpMV,'mv-fecha'),status=$('mv-status').value;
  if(!prodId||!qty||!precio||!fecha){toast('Completa todos los campos requeridos','error');return;}
  const prod=PRODUCTS.find(p=>p.id===prodId);if(!prod)return;
  if(prod.stock<qty){toast(`Stock insuficiente. Disponible: ${prod.stock} u.`,'error');return;}
  prod.stock-=qty;
  VENTAS.push({id:nxtVenta++,fecha,prodId,prod:prod.name,qty,precio,total:qty*precio,emp:CU.name,status});
  MOVIMIENTOS.push({id:nxtMov++,fecha,prodId,prod:prod.name,tipo:'salida',qty:-qty,resp:CU.name,nota:`Venta #${nxtVenta-1}`});
  save();renderVentas(VENTAS);renderInv(PRODUCTS);renderMovs(MOVIMIENTOS);
  refreshVentasStats();refreshInvStats();checkLowStock();renderROps();renderHistorial();renderDashboard();refreshReportStats();
  closeModal('modal-venta');clearForm(['mv-qty','mv-precio','mv-total']);
  toast(`Venta registrada — ${fmt(qty*precio)}`,'success');
}
function saveCompra(){
  const provId=parseInt($('mc-prov').value),prodId=parseInt($('mc-prod').value);
  const qty=parseInt($('mc-qty').value)||0,costo=parseFloat($('mc-costo').value)||0;
  const fecha=getFP(fpMC,'mc-fecha'),status=$('mc-status').value;
  if(!provId||!prodId||!qty||!costo||!fecha){toast('Completa todos los campos requeridos','error');return;}
  const prod=PRODUCTS.find(p=>p.id===prodId),prov=PROVEEDORES.find(p=>p.id===provId);
  if(status==='completada')prod.stock+=qty;
  COMPRAS.push({id:nxtCompra++,fecha,provId,prov:prov.name,prodId,prod:prod.name,qty,costo,total:qty*costo,status});
  if(status==='completada')MOVIMIENTOS.push({id:nxtMov++,fecha,prodId,prod:prod.name,tipo:'entrada',qty,resp:CU.name,nota:`Compra #${nxtCompra-1}`});
  save();renderCompras(COMPRAS);renderInv(PRODUCTS);renderMovs(MOVIMIENTOS);
  refreshComprasStats();refreshInvStats();checkLowStock();renderHistorial();renderDashboard();refreshReportStats();
  closeModal('modal-compra');clearForm(['mc-qty','mc-costo','mc-total']);
  toast(`Compra registrada — ${fmt(qty*costo)}`,'success');
}
async function deleteVenta(id){if(!await confirmDlg('¿Eliminar esta venta?',''))return;VENTAS=VENTAS.filter(v=>v.id!==id);save();renderVentas(VENTAS);refreshVentasStats();renderHistorial();renderDashboard();refreshReportStats();toast('Venta eliminada','success');}
async function deleteCompra(id){if(!await confirmDlg('¿Eliminar esta compra?',''))return;COMPRAS=COMPRAS.filter(c=>c.id!==id);save();renderCompras(COMPRAS);refreshComprasStats();renderHistorial();renderDashboard();refreshReportStats();toast('Compra eliminada','success');}
function optab(btn,tab){document.querySelectorAll('#panel-operaciones .tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');$('op-ventas').style.display=tab==='op-ventas'?'block':'none';$('op-compras').style.display=tab==='op-compras'?'block':'none';$('op-historial').style.display=tab==='op-historial'?'block':'none';}

// ═══ REPORTES ═══
function refreshReportStats(){const tv=VENTAS.reduce((s,v)=>s+v.total,0),tc=COMPRAS.reduce((s,c)=>s+c.total,0);$('r-total-ventas').textContent=fmt(tv);$('r-total-compras').textContent=fmt(tc);$('r-ganancia').textContent=fmt(tv-tc);}
function renderRInv(){$('r-inv-tbody').innerHTML=PRODUCTS.map(p=>{const stC=p.stock===0?'var(--danger)':p.stock<=p.min?'var(--warning)':'var(--success)';const stL=p.stock===0?'Agotado':p.stock<=p.min?'Crítico':'Normal';return `<tr><td class="fw-700">${p.name}</td><td><span class="badge badge-info" style="font-size:10px;">${p.cat}</span></td><td class="mono fw-700" style="color:${stC};">${p.stock}</td><td class="mono text-muted">${p.min}</td><td class="mono fw-700 text-accent">${fmt(p.cost*p.stock)}</td><td><span class="status-pill"><span class="dot ${p.stock===0?'dot-red':p.stock<=p.min?'dot-warn':'dot-on'}"></span>${stL}</span></td></tr>`;}).join('');}
function renderROps(){const all=[...VENTAS.map(v=>({fecha:v.fecha,tipo:'VENTA',prod:v.prod,qty:v.qty,monto:v.total,user:v.emp})),...COMPRAS.map(c=>({fecha:c.fecha,tipo:'COMPRA',prod:c.prod,qty:c.qty,monto:-c.total,user:'Compras'}))].sort((a,b)=>b.fecha.localeCompare(a.fecha));$('r-ops-tbody').innerHTML=all.map(r=>`<tr><td class="mono text-muted" style="font-size:12px;">${r.fecha}</td><td><span class="badge ${r.tipo==='VENTA'?'badge-success':'badge-warning'}">${r.tipo}</span></td><td class="fw-700">${r.prod}</td><td class="mono">${r.qty}</td><td class="mono fw-700 ${r.monto>0?'text-success':'text-danger'}">${r.monto>0?'+':''}${fmt(Math.abs(r.monto))}</td><td>${r.user}</td></tr>`).join('');}
function rtab(btn,tab){document.querySelectorAll('#panel-reportes .tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');$('r-resumen').style.display=tab==='r-resumen'?'block':'none';$('r-inv').style.display=tab==='r-inv'?'block':'none';$('r-ops').style.display=tab==='r-ops'?'block':'none';}
function generarReporte(){NProgress.start();setTimeout(()=>{NProgress.done();Swal.fire({icon:'success',title:'Reporte generado',html:`<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px;font-family:JetBrains Mono,monospace;font-size:12px;color:var(--text-dim);text-align:left;">Productos: <b style="color:var(--accent)">${PRODUCTS.length}</b><br>Ventas: <b style="color:var(--success)">${VENTAS.length}</b><br>Compras: <b style="color:var(--warning)">${COMPRAS.length}</b><br>Generado: ${new Date().toLocaleString('es-HN')}</div>`,background:'var(--surface)',color:'var(--text)',confirmButtonText:'Cerrar',customClass:{confirmButton:'swal2-confirm'},buttonsStyling:false});},800);}
async function resetData(){
  if(!await confirmDlg('¿Resetear todos los datos?','Esto restaurará los datos de demostración. <strong>No se puede deshacer.</strong>','warning'))return;
  LS.clear();USERS=JSON.parse(JSON.stringify(DEF_USERS));PRODUCTS=JSON.parse(JSON.stringify(DEF_PROD));PROVEEDORES=JSON.parse(JSON.stringify(DEF_PROV));VENTAS=JSON.parse(JSON.stringify(DEF_VENTAS));COMPRAS=JSON.parse(JSON.stringify(DEF_COMPRAS));MOVIMIENTOS=JSON.parse(JSON.stringify(DEF_MOVS));
  nxtUser=5;nxtProd=9;nxtProv=7;nxtVenta=6;nxtCompra=5;nxtMov=5;
  save();renderAll();renderDashboard();checkLowStock();toast('Datos restaurados correctamente','success');
}

// ═══ NAVEGACIÓN ═══
const TITLES={dashboard:'🏠 Dashboard',usuarios:'👥 Gestión de Usuarios',inventario:'📦 Inventario',proveedores:'🏭 Proveedores',operaciones:'💳 Operaciones',reportes:'📊 Reportes'};
function goPanel(el){
  NProgress.start();
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));el.classList.add('active');
  const panel=el.dataset.panel;
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  $('panel-'+panel).classList.add('active');
  $('page-title').textContent=TITLES[panel];
  setTimeout(()=>NProgress.done(),300);
}

// ═══ SELECTS ═══
function populateSelects(){
  const mpP=$('mp-prov');if(mpP)mpP.innerHTML='<option value="">— Seleccionar —</option>'+PROVEEDORES.filter(p=>p.status==='activo').map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  const mmP=$('mm-prod');if(mmP)mmP.innerHTML='<option value="">— Seleccionar —</option>'+PRODUCTS.map(p=>`<option value="${p.id}">${p.name} (${p.stock}u.)</option>`).join('');
  const mvP=$('mv-prod');if(mvP)mvP.innerHTML='<option value="">— Seleccionar —</option>'+PRODUCTS.filter(p=>p.stock>0).map(p=>`<option value="${p.id}">${p.name} (${p.stock}u.) — ${fmt(p.price)}</option>`).join('');
  const mcProv=$('mc-prov');if(mcProv)mcProv.innerHTML='<option value="">— Seleccionar —</option>'+PROVEEDORES.filter(p=>p.status==='activo').map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  const mcProd=$('mc-prod');if(mcProd)mcProd.innerHTML='<option value="">— Seleccionar —</option>'+PRODUCTS.map(p=>`<option value="${p.id}">${p.name} — costo ${fmt(p.cost)}</option>`).join('');
}

function clearForm(ids){ids.forEach(id=>{const el=$(id);if(el)el.value='';});}

// ═══ SIDEBAR RESPONSIVE ═══
function togglePass(inputId, btn){
  const inp = $(inputId);
  const isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  btn.querySelector('.eye-open').style.display  = isHidden ? 'none'  : '';
  btn.querySelector('.eye-closed').style.display = isHidden ? ''     : 'none';
}

function toggleSidebar(){
  const sb = document.querySelector('.sidebar');
  const hb = $('hamburger');
  const ov = $('sb-overlay');
  const isOpen = sb.classList.contains('open');
  if(isOpen){ closeSidebar(); }
  else { sb.classList.add('open'); hb.classList.add('open'); ov.classList.add('show'); }
}
function closeSidebar(){
  document.querySelector('.sidebar').classList.remove('open');
  $('hamburger').classList.remove('open');
  $('sb-overlay').classList.remove('show');
}
// Close sidebar when nav item clicked on mobile
document.querySelectorAll('.nav-item').forEach(el=>{
  el.addEventListener('click',()=>{ if(window.innerWidth<=768) closeSidebar(); });
});
// Close on resize to desktop
window.addEventListener('resize',()=>{ if(window.innerWidth>768) closeSidebar(); });