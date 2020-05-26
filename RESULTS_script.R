
## instalar pacotes (se ainda nao estiver instalado)

install.packages("ibextor")
install.packages("tidyverse")

## obs: se tiver problemas com instalacao, veja se esta com a versao mais atual do R. pra duvidas adicionais ***apenas sobre o R***, procure o grupo R para Linguistas no Facebook

## carregar pacotes
library(ibextor)
library(tidyverse)

## recupera os tempos de reacao
rt = get_results_ds("~/Downloads/results_pilot.csv")

## recupera informacao dos participantes
subjects <- get_subj_info("~/Downloads/results_pilot.csv", form_name = "demografia")

## recupera resposta dadas as questoes
questions = get_results_q("~/Downloads/spr_checkingresults/results/results.csv")

## coloca questoes em ordem crescente
questions = questions %>% group_by(subj) %>% mutate(order = 1:n())

## conferindo numero de observacoes por subj_uid
rt %>% group_by(subj_uid) %>% summarise(n())

## cria conjunto de dados combinando as respostas das questoes aos tempo de reacao
data <- merge(rt,questions,by=c("subj", "presentation_order", "type", "item", "subj_uid"))

### ver distribuicao de itens para conferir balanceamento

check = data %>% group_by(subj, item) %>% sample_n(1)


### exporta conjunto de dados em csv caso nao se pretenda usar o R para analise (inserir no lugar de (...) o caminho para a pasta onde o conjunto data.csv, e.g., "academicos/experimentos/resultados")


write.csv(data, "~/(...)/dadosbrutos.csv")

