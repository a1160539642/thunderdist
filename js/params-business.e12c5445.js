"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[168,301,20],{7161:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var t=a(6252),i=a(3577);const o={class:"left-panel"},s={class:"right-panel"},r={class:"right-panel-search"},n={class:"truncate"},d={key:1};function c(e,l,a,c,p,u){const w=(0,t.up)("el-button"),m=(0,t.up)("el-input"),h=(0,t.up)("el-header"),f=(0,t.up)("el-table-column"),g=(0,t.up)("el-icon-circle-check-filled"),b=(0,t.up)("el-icon"),k=(0,t.up)("el-icon-circle-close-filled"),y=(0,t.up)("el-icon-warning-filled"),_=(0,t.up)("el-popover"),$=(0,t.up)("el-popconfirm"),W=(0,t.up)("el-button-group"),v=(0,t.up)("scTable"),C=(0,t.up)("el-main"),D=(0,t.up)("el-container"),j=(0,t.up)("save-dialog"),x=(0,t.up)("importDialog"),U=(0,t.up)("drawerLog"),S=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t._)("div",o,[e.$AUTH("params.business.edit")?((0,t.wg)(),(0,t.j4)(w,{key:0,type:"primary",icon:"el-icon-plus",onClick:u.add},null,8,["onClick"])):(0,t.kq)("",!0),e.$AUTH("params.business.import")?((0,t.wg)(),(0,t.j4)(w,{key:1,type:"primary",icon:"el-icon-upload",onClick:u.openImport},{default:(0,t.w5)((()=>[(0,t.Uk)("批量导入")])),_:1},8,["onClick"])):(0,t.kq)("",!0),e.$AUTH("params.business.export")?((0,t.wg)(),(0,t.j4)(w,{key:2,type:"primary",icon:"el-icon-download",onClick:u.openExport},{default:(0,t.w5)((()=>[(0,t.Uk)("导出")])),_:1},8,["onClick"])):(0,t.kq)("",!0)]),(0,t._)("div",s,[(0,t._)("div",r,[(0,t.Wm)(m,{modelValue:p.keywords,"onUpdate:modelValue":l[0]||(l[0]=e=>p.keywords=e),placeholder:"参数名称或所属业务",clearable:""},null,8,["modelValue"]),(0,t.Wm)(w,{type:"primary",icon:"el-icon-search",onClick:u.upsearch},null,8,["onClick"])])])])),_:1}),(0,t.Wm)(C,{class:"nopadding"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{ref:"table",apiObj:p.apiObj,"row-key":"id",onSelectionChange:u.selectionChange,stripe:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"ID",prop:"id",width:"50"}),(0,t.Wm)(f,{label:"参数名称",prop:"name",width:"120"}),(0,t.Wm)(f,{label:"状态",prop:"enable",width:"80"},{default:(0,t.w5)((e=>[1==e.row.enable?((0,t.wg)(),(0,t.j4)(b,{key:0,style:{color:"#67c23a"}},{default:(0,t.w5)((()=>[(0,t.Wm)(g)])),_:1})):((0,t.wg)(),(0,t.j4)(b,{key:1,style:{color:"#f56c6c"}},{default:(0,t.w5)((()=>[(0,t.Wm)(k)])),_:1}))])),_:1}),(0,t.Wm)(f,{label:"特别注意",prop:"attention",width:"80"},{default:(0,t.w5)((e=>[1==e.row.attention?((0,t.wg)(),(0,t.j4)(b,{key:0,style:{color:"#f89898"}},{default:(0,t.w5)((()=>[(0,t.Wm)(y)])),_:1})):((0,t.wg)(),(0,t.j4)(b,{key:1,style:{color:"#afb1b6"}},{default:(0,t.w5)((()=>[(0,t.Wm)(y)])),_:1}))])),_:1}),(0,t.Wm)(f,{label:"注意点",prop:"notice",width:"150"},{default:(0,t.w5)((e=>[1==e.row.attention?((0,t.wg)(),(0,t.j4)(_,{key:0,width:400},{reference:(0,t.w5)((()=>[(0,t._)("div",n,(0,i.zw)(e.row.notice),1)])),default:(0,t.w5)((()=>[(0,t.Uk)(" "+(0,i.zw)(e.row.notice)+" ",1)])),_:2},1024)):((0,t.wg)(),(0,t.iD)("div",d))])),_:1}),(0,t.Wm)(f,{label:"所属业务",prop:"superior","show-overflow-tooltip":"",width:"150"}),(0,t.Wm)(f,{label:"修改记录",prop:"history",width:"150"},{default:(0,t.w5)((e=>[(0,t.Wm)(w,{type:"primary",link:"",onClick:l=>u.showHistory(e.row)},{default:(0,t.w5)((()=>[(0,t.Uk)("查看")])),_:2},1032,["onClick"])])),_:1}),(0,t.Wm)(f,{label:"创建时间",prop:"creat_time",width:"150"}),(0,t.Wm)(f,{label:"操作",fixed:"right",align:"right",width:"120"},{default:(0,t.w5)((e=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{text:"",type:"primary",size:"small",onClick:l=>u.table_edit(e.row,e.$index)},{default:(0,t.w5)((()=>[(0,t.Uk)("编辑")])),_:2},1032,["onClick"]),(0,t.Wm)($,{title:"确定删除吗？",onConfirm:l=>u.table_del(e.row,e.$index)},{reference:(0,t.w5)((()=>[(0,t.Wm)(w,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),p.dialog.save?((0,t.wg)(),(0,t.j4)(j,{key:0,data:e.$refs.table.tableData,ref:"saveDialog",onSuccess:u.handleSuccess,onClosed:l[1]||(l[1]=e=>p.dialog.save=!1)},null,8,["data","onSuccess"])):(0,t.kq)("",!0),(0,t.Wm)(x,{modname:"商务参数",apiObj:p.uploadObj,ref:"importDialog",onSuccess:u.handleSuccess},null,8,["apiObj","onSuccess"]),(0,t.Wm)(S,{modelValue:p.dialog.log,"onUpdate:modelValue":l[2]||(l[2]=e=>p.dialog.log=e),size:"80%",title:"查看日志","destroy-on-close":""},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{ref:"drawerLog"},null,512)])),_:1},8,["modelValue"])],64)}var p=a(8109),u=a(3279),w=a(8564),m=a(8204),h={name:"business",components:{saveDialog:u["default"],drawerLog:m["default"],importDialog:w["default"]},data(){return{dialog:{save:!1,log:!1},keywords:"",apiObj:this.$API.params.business.list,uploadObj:this.$API.params.business.import,selection:[],file:""}},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e,l){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e,l)}))},async table_del(e,l){var a={id:e.id};try{await this.$API.params.business.del.post(a),this.$refs.table.tableData.splice(l,1),this.$message.success("删除成功")}catch(t){}},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((l,a)=>{e.id===l.id&&this.$refs.table.tableData.splice(a,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},upsearch(){""==this.keywords?this.$refs.table.reload():this.$refs.table.reload({keywords:this.keywords})},openLog(){this.dialog.log=!0,this.$nextTick((()=>{let e={remark:""};this.$refs.drawerLog.setForm(e)}))},openImport(){this.$refs.importDialog.open()},openExport(){(0,p.G)(this.$refs.table.tableData,"商务参数导出")},selectionChange(e){this.selection=e},async showHistory(e){this.dialog.log=!0,this.$nextTick((()=>{let l={name:"商务参数增改",remark:String(e.id)};this.$refs.drawerLog.setForm(l)}))},handleSuccess(){this.$refs.table.getData()}}},f=a(3744);const g=(0,f.Z)(h,[["render",c]]);var b=g}}]);