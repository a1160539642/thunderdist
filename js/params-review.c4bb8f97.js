"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[355,301,20],{6572:function(e,l,a){a.r(l),a.d(l,{default:function(){return w}});var t=a(6252);const i={class:"left-panel"},o={class:"right-panel"},s={class:"right-panel-search"};function r(e,l,a,r,n,c){const d=(0,t.up)("el-button"),p=(0,t.up)("el-input"),u=(0,t.up)("el-header"),h=(0,t.up)("el-table-column"),m=(0,t.up)("el-icon-circle-check-filled"),w=(0,t.up)("el-icon"),f=(0,t.up)("el-icon-circle-close-filled"),g=(0,t.up)("el-popconfirm"),k=(0,t.up)("el-button-group"),b=(0,t.up)("scTable"),y=(0,t.up)("el-main"),$=(0,t.up)("el-container"),_=(0,t.up)("save-dialog"),v=(0,t.up)("importDialog"),W=(0,t.up)("drawerLog"),C=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t._)("div",i,[e.$AUTH("params.review.edit")?((0,t.wg)(),(0,t.j4)(d,{key:0,type:"primary",icon:"el-icon-plus",onClick:c.add},null,8,["onClick"])):(0,t.kq)("",!0),e.$AUTH("params.review.import")?((0,t.wg)(),(0,t.j4)(d,{key:1,type:"primary",icon:"el-icon-upload",onClick:c.openImport},{default:(0,t.w5)((()=>[(0,t.Uk)("批量导入")])),_:1},8,["onClick"])):(0,t.kq)("",!0),e.$AUTH("params.review.export")?((0,t.wg)(),(0,t.j4)(d,{key:2,type:"primary",icon:"el-icon-download",onClick:c.openExport},{default:(0,t.w5)((()=>[(0,t.Uk)("导出")])),_:1},8,["onClick"])):(0,t.kq)("",!0)]),(0,t._)("div",o,[(0,t._)("div",s,[(0,t.Wm)(p,{modelValue:n.keywords,"onUpdate:modelValue":l[0]||(l[0]=e=>n.keywords=e),placeholder:"参数名称或所属业务",clearable:""},null,8,["modelValue"]),(0,t.Wm)(d,{type:"primary",icon:"el-icon-search",onClick:c.upsearch},null,8,["onClick"])])])])),_:1}),(0,t.Wm)(y,{class:"nopadding"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{ref:"table",apiObj:n.apiObj,"row-key":"id",onSelectionChange:c.selectionChange,stripe:""},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{label:"ID",prop:"id",width:"50"}),(0,t.Wm)(h,{label:"参数名称",prop:"name",width:"120"}),(0,t.Wm)(h,{label:"状态",prop:"enable",width:"80"},{default:(0,t.w5)((e=>[1==e.row.enable?((0,t.wg)(),(0,t.j4)(w,{key:0,style:{color:"#67c23a"}},{default:(0,t.w5)((()=>[(0,t.Wm)(m)])),_:1})):((0,t.wg)(),(0,t.j4)(w,{key:1,style:{color:"#f56c6c"}},{default:(0,t.w5)((()=>[(0,t.Wm)(f)])),_:1}))])),_:1}),(0,t.Wm)(h,{label:"参数类型",prop:"paratype",width:"150"}),(0,t.Wm)(h,{label:"所属业务",prop:"superior","show-overflow-tooltip":"",width:"150"}),(0,t.Wm)(h,{label:"修改记录",prop:"history",width:"150"},{default:(0,t.w5)((e=>[(0,t.Wm)(d,{type:"primary",link:"",onClick:l=>c.showHistory(e.row)},{default:(0,t.w5)((()=>[(0,t.Uk)("查看")])),_:2},1032,["onClick"])])),_:1}),(0,t.Wm)(h,{label:"创建时间",prop:"creat_time",width:"150"}),(0,t.Wm)(h,{label:"操作",fixed:"right",align:"right",width:"120"},{default:(0,t.w5)((e=>[(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{text:"",type:"primary",size:"small",onClick:l=>c.table_edit(e.row,e.$index)},{default:(0,t.w5)((()=>[(0,t.Uk)("编辑")])),_:2},1032,["onClick"]),(0,t.Wm)(g,{title:"确定删除吗？",onConfirm:l=>c.table_del(e.row,e.$index)},{reference:(0,t.w5)((()=>[(0,t.Wm)(d,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),n.dialog.save?((0,t.wg)(),(0,t.j4)(_,{key:0,data:e.$refs.table.tableData,ref:"saveDialog",onSuccess:c.handleSuccess,onClosed:l[1]||(l[1]=e=>n.dialog.save=!1)},null,8,["data","onSuccess"])):(0,t.kq)("",!0),(0,t.Wm)(v,{modname:"评审参数",apiObj:n.uploadObj,ref:"importDialog",onSuccess:c.handleSuccess},null,8,["apiObj","onSuccess"]),(0,t.Wm)(C,{modelValue:n.dialog.log,"onUpdate:modelValue":l[2]||(l[2]=e=>n.dialog.log=e),size:"80%",title:"查看日志","destroy-on-close":""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{ref:"drawerLog"},null,512)])),_:1},8,["modelValue"])],64)}var n=a(8109),c=a(6757),d=a(8564),p=a(8204),u={name:"review",components:{saveDialog:c["default"],drawerLog:p["default"],importDialog:d["default"]},data(){return{dialog:{save:!1,log:!1},keywords:"",apiObj:this.$API.params.review.list,uploadObj:this.$API.params.review.import,selection:[],file:""}},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e,l){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e,l)}))},async table_del(e,l){var a={id:e.id};try{await this.$API.params.review.del.post(a),this.$refs.table.tableData.splice(l,1),this.$message.success("删除成功")}catch(t){}},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((l,a)=>{e.id===l.id&&this.$refs.table.tableData.splice(a,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},upsearch(){""==this.keywords?this.$refs.table.reload():this.$refs.table.reload({keywords:this.keywords})},openLog(){this.dialog.log=!0,this.$nextTick((()=>{let e={remark:""};this.$refs.drawerLog.setForm(e)}))},openImport(){this.$refs.importDialog.open()},openExport(){(0,n.G)(this.$refs.table.tableData,"评审参数导出")},selectionChange(e){this.selection=e},async showHistory(e){this.dialog.log=!0,this.$nextTick((()=>{let l={name:"评审参数增改",remark:String(e.id)};this.$refs.drawerLog.setForm(l)}))},handleSuccess(){this.$refs.table.getData()}}},h=a(3744);const m=(0,h.Z)(u,[["render",r]]);var w=m}}]);